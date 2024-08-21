import React from 'react'
import styles from './TsItem.module.css';
import { RxCross2 } from "react-icons/rx";

interface Props{
    id:number;
    title:string;
    type?:string;
    description:string;
    deadline:string;
    members:string[];
    priority:string;
    progress?:number;
    onDelete:()=>void;
}

const TsItem = ({title,deadline,members,priority,progress, onDelete}:Props) => {
  return (
    <div className={styles['container']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['contents']}>{deadline}</div>
        <div className={styles['contents']}>{members}</div>
        <div className={styles['contents']}>{priority}</div> 
        <RxCross2 onClick={()=>onDelete} size={20} style={{cursor:"pointer"}}/>
    </div>
  )
}

export default TsItem;