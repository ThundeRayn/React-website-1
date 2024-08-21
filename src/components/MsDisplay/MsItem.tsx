import styles from './MsItem.module.css';

//import svgs from img
import MsNone from '../assets/imgs/milestone1.png';
import MsProgress from '../assets/imgs/milestone2.png';
import MsComplete from '../assets/imgs/milestone3.png';

interface Props {
    id:number;
    title:string;
    type:string;
    amount?:number;
    description:string;
    deadline:string;
    progress:number;
}

const MsItem = ({id,title,type,amount,description,deadline,progress}:Props) => {


  return (

    <div className={styles['container']} key = {id}>
        <div className={styles['Title']}>
          {progress === 100 
          ? <div style={{width:"100%", backgroundColor:"#8DB093",filter: "brightness(80%)"}} className={styles['progress-bg']}></div>
          : <div style={{width:progress + "%"}} className={styles['progress-bg']}></div>}
            
          {progress === 0 && <img src={MsNone} alt="" width="70" />}
          {progress != 100 && progress != 0 && <img src={MsProgress} alt="" width="70" />}
          {progress === 100 && <img src={MsComplete} alt="" width="70" />}
          <h2>{title}</h2>
          <p>{description} </p>
        </div>
    </div>
  )
}

export default MsItem;