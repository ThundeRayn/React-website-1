import styles from './Notification.module.css';

interface Props{
    notifications: string[];
    onClear: ()=> void;
    update:()=>void;
}

const Notification = ({notifications, onClear,update}: Props) => {
  return (
    <div>
      <div className={styles['Notification-container']}>
      
      <ul className={styles['Notification-list']}>
          {notifications.map(item => <li key={item} className={styles['list-item']}>{item}</li>)}
      </ul></div>

      <button onClick={update}>update</button>
      <button onClick={onClear}>clear</button>
    </div>
  )
}

export default Notification;