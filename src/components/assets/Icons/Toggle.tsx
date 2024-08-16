import styles from './Toggle.module.css';

interface Prop{
  toggle: boolean;
  handleToggleChange: ()=> void;
}

const Toggle = ({toggle, handleToggleChange}: Prop) => {

  return (
    <div className={styles["toggle-container"]} onClick={handleToggleChange}>
        <div className={styles[`${toggle ? "lable":"lable1"}`]}>
          {toggle?"Revenue Goal":"Project Goal"}
        </div>

        <div className={styles[`${toggle ? "disable":"toggle-btn"}`]}>
          {toggle?"Project Goal":"Revenue Goal"}
        </div>
    </div>
  )
}

export default Toggle;