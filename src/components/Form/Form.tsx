import { FormEvent } from 'react';
import styles from './Form.module.css';

const Form = () => {

  const handleSubmit = (event: FormEvent) =>{
    event.preventDefault();
    console.log('Submitted')
  }

  return (
    <form className={styles['form']} onSubmit={(event)=>{handleSubmit(event)}}>
        <div className={styles["mb-3"]}>
            <label htmlFor="user" className="form-label">User</label>
            <input id="user" type="text" className="form-control" />
        </div>

        <div className={styles["mb-3"]}>
          <label htmlFor="comment" className="form-lable">Comment</label>
          <input id="comment" type="number" className="form-control" />
        </div>

        <div className={styles["mb-3"]}>
          <button className={"btn btn-primary"} type='submit'>comment</button>
        </div>
    </form>
  )
}

export default Form;