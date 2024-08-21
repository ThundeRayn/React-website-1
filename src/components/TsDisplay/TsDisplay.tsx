import { useState } from 'react';
import styles from './TsDisplay.module.css';
import { RxCross2 } from "react-icons/rx";
import TsItem from "./TsItem";

interface Task {
    id:number;
    title:string;
    type?:string;
    description:string;
    deadline:string;
    members:string[];
    priority:string;
    progress?:number;
}
interface TsProps{
    tasks: Task[];
    onDelete:(id:number) => void;
}

const TsDisplay = ({tasks, onDelete}: TsProps) => {

  if (tasks.length === 0) return null;
  const [hover, isHover] = useState(false);


  return (
    <div>

        <table className={styles['table']}>
            <thead>
                <tr>
                    <th style={{width :"50%"}}>Title</th>
                    <th style={{width :"15%"}}>Deadline</th>
                    <th style={{width :"15%"}}>Members</th>
                    <th style={{width :"15%"}}>priority</th>
                    <th> </th>
                </tr>
            </thead>
        </table>
        {tasks.map(tasks => 
            <TsItem
                id={tasks.id}
                title={tasks.title}
                type={tasks.type}
                description={tasks.description}
                deadline={tasks.deadline}
                members={tasks.members}
                priority={tasks.priority}
                progress={tasks.progress}
                onDelete={()=>onDelete(tasks.id)}
                />)}

    </div>
  )
}

export default TsDisplay;