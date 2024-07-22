import styles from './Button.module.css';

interface PropButton {
    children: string;
    color?: string;
    onClick : () => void;
}


const Button = ({children, color='primary', onClick}:PropButton) => {
  return (
    <div>
    <button 
        className={[styles.btn, styles["btn-" + color]].join(' ')} 
        onClick={onClick}
    >{children}</button>
    </div>
  )
}

export default Button