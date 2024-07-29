

interface Props{
    notifications: string[];
    onClear: ()=> void;
    update:()=>void;
}

const Notification = ({notifications, onClear,update}: Props) => {
  return (
    <>
    <p>Notification</p>
    <ul>
        {notifications.map(item => <li key={item}>{item}</li>)}
    </ul>
    <button onClick={update}>update</button>
    <button onClick={onClear}>clear</button>
    </>
  )
}

export default Notification