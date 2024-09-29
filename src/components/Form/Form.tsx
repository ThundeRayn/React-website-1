import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
//toggle Icon
import Toggle from '../assets/Icons/Toggle';
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
//switch react icons
import Icon from '../assets/Icons/SelectIcon';
import { RxCross2 } from "react-icons/rx";
//local styles
import styles from './Form.module.css';

interface formProps{
  Open: boolean;
  Set_Open:()=>void;
}

const schema = z.object({
  mstitle: z
    .string()
    .min(2, {message: 'title must be at least 2 characters'})
    .max(50, {message: 'title must be less than 50 characters'})
    .default("New Milestone"),
  amount:  z
    .number({invalid_type_error: 'Amount field is required'})
    .min(1,{message: 'Amount must be at least 1 dollar'})
    .default(0),
  mstype: z.boolean().default(true),
  content: z.string().max(200, {message: 'maximum 200 characters'}),
  deadline: z.date()
});

type FormData = z.infer<typeof schema>;

const Form = ({Open,Set_Open}:formProps) => {
  const {
    register, 
    handleSubmit, 
    reset,
    formState: {errors, isValid}
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange" //display invalid message onChange instead of clicking submit
  });
  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };
  const [toggle, SetToggle] = useState(false);
  const handleToggleChange = ()=>{
    SetToggle(!toggle);
  }

  return (
    <div className={Open? styles['form-container'] : styles['form-container-closed']}>
    <div className={styles['close-btn']}><Icon 
        Icon={RxCross2}
        newsize="32"
        newcolor="#454546"
        onClick={Set_Open}/></div>

    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
      <p className={styles['title']}>Add Milestone</p>
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
          <Toggle toggle={toggle} handleToggleChange={
            handleToggleChange}/>
        </div>

      {/* Deadline*/}
      <div className={styles["mb-3"]}>
        <label htmlFor="deadline" className="form-label"/>
          <i>
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
        <div className={toggle? styles["mb-3-amount-disabled"] : styles["mb-3-amount"]}>
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
            <textarea
              id="content" 
              rows={6}
              cols={37}
              typeof="text"
              maxLength={201}
              placeholder="Description"
              {...register("content")}
              className={styles["form-large"]}/>
        </div>
        {errors.content && <p className="text-danger">{errors.content.message}</p>}

        <div className={styles["mb-3"]}>
          <button className={styles["submit-btn"]} disabled={!isValid} type='submit'>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default Form;