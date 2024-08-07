//navbar react icons
import { MdAccountCircle } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { VscMilestone } from "react-icons/vsc";
import { BiTask } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
//switch react icons
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";
//imports
import { useState } from "react";
import Icon from "../Icons/SwitchIcon";
import styles from './NavBar.module.css';
import SelectIcon from "../Icons/SelectIcon";

interface notificationProps{
    notificationCount: number;
}

function NavBar({notificationCount}:notificationProps){

    //tab icons
    const [SelectTab, Set_SelectTab] = useState(0);
    const icon_list=[MdAccountCircle,RiDashboardFill,IoNotifications,VscMilestone,BiTask,RiMoneyDollarCircleFill,IoIosPeople]
    const icon_size=['30','28','28','28','28','28', '28']

    return(
    <div className={styles.nav_container}>
        
        <ul className={styles.nav}>
        <Icon BeforeClick={RxCross2} AfterClick={HiOutlineMenu} onClick={()=>{console.log("expand")}}/>
        {icon_list.map((item,index)=>(
          <li className={styles.tab}>

            {(SelectTab===index)? 
                <SelectIcon Icon={item} newsize={icon_size[index]} newcolor='#4A4A4B'/> 
                : <SelectIcon Icon={item} newsize={icon_size[index]}  newcolor='#A7A7A7'
                onClick={()=>{Set_SelectTab(index)}}/>}
          </li>)
          )}
        </ul>

        <p>Notification received: {notificationCount}</p>
        {!(JSON.stringify(notificationCount) === '0') 
        && <span className={styles.dot}></span>}
        
    </div>
    );
}

export default NavBar;