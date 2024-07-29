import { MdAccountCircle } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { VscMilestone } from "react-icons/vsc";
import { BiTask } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { useState } from "react";
import Icon from "../Icons/Icon";
import styles from './NavBar.module.css';

interface notificationProps{
    notificationCount: number;
}

function NavBar({notificationCount}:notificationProps){

    //tab icons
    const [SelectTab, Set_SelectTab] = useState(0);

    return(
    <div>
        <Icon onClick={()=>{console.log("expand")}}/>
        
        <ul className={styles.nav}>
            <li className="tab">
                {(SelectTab===0)? 
                <MdAccountCircle size='30' color='#4A4A4B'/> 
                : <MdAccountCircle size='30' color='#A7A7A7'
                onClick={()=>{Set_SelectTab(0)}}/>}
            </li>
            <li>
                {(SelectTab===1)? 
                <RiDashboardFill size='28' color='#4A4A4B'/> 
                : <RiDashboardFill size='28' color='#A7A7A7'
                onClick={()=>{Set_SelectTab(1)}}/>}
            </li>
            <li>
                {(SelectTab===2)? 
                <VscMilestone size='28' color='#4A4A4B'/> 
                : <VscMilestone size='28' color='#A7A7A7'
                onClick={()=>{Set_SelectTab(2)}}/>}
            </li>
            <li>
                {(SelectTab===3)? 
                <BiTask size='28' color='#4A4A4B'/> 
                : <BiTask size='28' color='#A7A7A7'
                onClick={()=>{Set_SelectTab(3)}}/>}
            </li>
            <li>
                {(SelectTab===4)? 
                <RiMoneyDollarCircleFill size='28' color='#4A4A4B'/> 
                : <RiMoneyDollarCircleFill size='28' color='#A7A7A7'
                onClick={()=>{Set_SelectTab(4)}}/>}
            </li>
            <li>
                {(SelectTab===5)? 
                <IoIosPeople size='28' color='#4A4A4B'/> 
                : <IoIosPeople size='28' color='#A7A7A7'
                onClick={()=>{Set_SelectTab(5)}}/>}
            </li>
        </ul>

        <p>Notification received: {notificationCount}</p>

    </div>
    );
}

export default NavBar;