import { useState } from 'react';
import Form from '../Form';
import styles from './MsDisplay.module.css';
import MsItem from './MsItem';
import { RxCross2 } from "react-icons/rx";

interface Milestone {
    id:number;
    title:string;
    type:string;
    amount?:number;
    description:string;
    deadline:string;
    progress:number;
}
interface MsProps{
    milestones: Milestone[];
    onDelete:(id:number) => void;
}


const MsDisplay = ({milestones, onDelete}: MsProps) => {

  //Add a Milestone
  const [Open, Set_Open] = useState(false)
  const openform = () => { Set_Open(!Open) }

  var today = new Date();


  if (milestones.length === 0) return null;

  return (
    <div>
      {/**overdued */}
      {milestones.map(m => 
        m.progress !==100 
        && new Date(m.deadline).setHours(0,0,0,0) < today.setHours(0,0,0,0) 
        &&
            <MsItem 
                id={m.id} 
                title={m.title} 
                type={m.type} 
                description={m.description} 
                deadline={m.deadline}
                progress={m.progress}/>
          )
        }

      {/**in progress */}
      {milestones.map(m => 
        m.progress !==100 
        && new Date(m.deadline).setHours(0,0,0,0) >= today.setHours(0,0,0,0) 
        &&
            <MsItem 
                id={m.id} 
                title={m.title} 
                type={m.type} 
                description={m.description} 
                deadline={m.deadline}
                progress={m.progress}/>
          )
        }

        {/**completed */}
        {milestones.map(m => 
        m.progress===100 &&
            <MsItem 
                id={m.id} 
                title={m.title} 
                type={m.type} 
                description={m.description} 
                deadline={m.deadline}
                progress={m.progress}/>
          )
        }

        
        <Form Open={Open} Set_Open={openform} />

        <div onClick={openform} className={styles['add-btn']}>  
          <RxCross2 size={60} style={{transform: 'rotate(45deg)'}} color='#5B5B5B'/>
        </div>
    
    </div>


  )
}

export default MsDisplay;