import styles from './MsItem.module.css';

//import svgs from img
import MsNone from '../assets/imgs/milestone1.png';
import MsProgress from '../assets/imgs/milestone2.png';
import MsComplete from '../assets/imgs/milestone3.png';
import MsOverdue from '../assets/imgs/milestone4.png';

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

  var ddl = new Date(deadline);
  var today = new Date();

  return (

    <div className={styles['container']} key = {id}>
        <div className={styles['Title']}>

          {/******* background progress & state sync */}
          {/* in progress (overdue /) */}

          {progress !== 100 && (ddl.setHours(0,0,0,0) >= today.setHours(0,0,0,0)
          ? <div style={{width:progress + "%"}} className={styles['progress-bg']}></div>
          : <div style={{width:progress + "%"}} className={styles['overdue-bg']}></div>)}

          {/*  completed */}
          {(progress === 100) && <div style={{width:"100%", backgroundColor:"#8DB093",filter: "brightness(80%)"}} className={styles['progress-bg']}></div>}

          {/***** Status PNG load*/}
          {progress === 0 && <img src={MsNone} alt="" width="70" />}

          {progress != 100 && progress != 0 && 
            (ddl.setHours(0,0,0,0) < today.setHours(0,0,0,0)
              ?<img src={MsOverdue} alt="" width="65" />
              :<img src={MsProgress} alt="" width="70" />)
              }

          {progress === 100 && <img src={MsComplete} alt="" width="70" />}

          
          <h2 className={styles['msItem-txt']}>{title}</h2>
          <p className={styles['msItem-txt']}>{description} </p>
        </div>
    </div>
  )
}

export default MsItem;