import React from 'react';
import { VscMilestone } from "react-icons/vsc";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import styles from './ProfileDisplay.module.css';

interface Props{
    member:Member;
}

interface Member{
    first_name:string;
    last_name:string;
    position:string;
    email:string;
    timezone:string;
}

const ProfileDisplay = ({member}:Props) => {
  return (
    <div className={styles['container']}>
        <div className={styles['profile']}>
            <FaUser size={"85%"} className={styles['profile-img']}/>
        </div>

        <div className={styles['info']}>
            <div className={styles['info-list']}>
                < VscMilestone size={30} style={{display:"inline-block"}}/> 
                <p className={styles['content']}>{member.position}</p>
            </div>

            <div className={styles['info-list']}>
                < IoLocationSharp size={25} style={{display:"inline-block"}}/>
                <p className={styles['content']}>{member.timezone}</p>
            </div>

            <div className={styles['info-list']}>
                < HiOutlineMail  size={25} style={{display:"inline-block"}}/>
                <p className={styles['content']}>{member.email}</p>
            </div>
            <div className={styles['info-list']}>< IoLocationSharp size={25}/></div>
        </div>

    </div>
  )
}

export default ProfileDisplay;