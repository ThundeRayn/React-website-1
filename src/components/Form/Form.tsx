import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Toggle from '../Icons/Toggle';
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import Icon from '../Icons/SelectIcon';
import styles from './Form.module.css';
import { useState } from "react";

const schema = z.object({
  mstitle: z
    .string()
    .min(2, {message: 'title must be at least 2 characters'})
    .max(50, {message: 'title must be less than 50 characters'})
    .default("New Milestone"),
  mstype:  z.boolean().default(true),
  amount:  z
    .number({invalid_type_error: 'Amount field is required'})
    .min(1,{message: 'Amount must be at least 1 dollar'})
    .default(0),
  content: z.string().max(200, {message: 'maximum 200 characters'}),
  deadline: z.date()
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register, 
    handleSubmit, 
    formState: {errors, isValid}
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange" //display invalid message onChange instead of clicking submit
  });
  console.log(errors);

  const onSubmit = (data: FieldValues) => console.log(data);
  const [toggle, SetToggle] = useState(false);
  const handleToggleChange = ()=>{
    SetToggle(!toggle);
  }

  return (
    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
      <h1>Add Milestone</h1>
      {/* Milstone Title*/}
        <div className={styles["mb-3"]}>
            <label htmlFor="mstitle" className="form-label"/>
            <input 
              { ...register('mstitle')}
              id="user" 
              type="text" 
              maxLength={51}
              placeholder="Milstone Title*"
              className={styles["form-control"]}
            />
        </div>
        {errors.mstitle && <p className="text-danger">{errors.mstitle.message}</p>}

      {/* Milstone Type*/}
        <div className={styles["mb-3"]}>
          <label htmlFor="mstype" className={styles["form-label"]}/>
          <Toggle toggle={toggle} handleToggleChange={handleToggleChange}/>
          <input  type='checkbox'
            {...register('mstype')}
          />
        </div>

      {/* Deadline*/}
      <div className={styles["mb-3"]}>
        <label htmlFor="deadline" className="form-label"/>
          <i className="money-i">
            <Icon Icon={MdOutlineEditCalendar} newsize={"23"}/>
          </i>
          <input 
            { ...register('deadline', {valueAsDate: true})}
            id="deadline" 
            type="date" 
            placeholder="Deadline"
            className={styles["form-control"]} />
      </div>
      {errors.deadline && <p className="text-danger">{errors.deadline.message}</p>}

      {/* Revenue Amount*/}
      {schema.mstype === 0 && (console.log('false'))}

        <div className={styles["mb-3"]}>
        <label htmlFor="amount" className="form-label"/>
          <i>
            <Icon Icon={MdOutlineAttachMoney} newsize={"23"}/>
          </i>
          <input 
            { ...register('amount', {valueAsNumber: true})}
            id="amount" 
            type="number" 
            placeholder="Revenue Goal"
            className={styles["form-control"]} />
        </div>
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}

        {/* Description*/}
        <div className={styles["mb-3"]}>
            <label htmlFor="content" className="form-label"/>
            <input 
              { ...register('content')}
              id="content" 
              type="text" 
              maxLength={201}
              placeholder="Description"
              className={styles["form-large"]}
            />
        </div>
        {errors.content && <p className="text-danger">{errors.content.message}</p>}

        <div className={styles["mb-3"]}>
          <button className={styles["submit-btn"]} disabled={!isValid} type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default Form;