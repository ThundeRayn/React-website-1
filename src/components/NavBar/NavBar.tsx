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
import Icon from "../assets/Icons/SwitchIcon";
import styles from './NavBar.module.css';
import SelectIcon from "../assets/Icons/SelectIcon";
import { Link } from "react-router-dom";

interface notificationProps{
    notificationCount: number;
    Open:boolean;
    Set_Open:()=>void;
}

function NavBar({notificationCount,Open,Set_Open}:notificationProps){

    //open nav bar
    const openClose = Set_Open;

    //tab icons
    const [SelectTab, Set_SelectTab] = useState(-1);
    const icon_list=[MdAccountCircle,RiDashboardFill,IoNotifications,VscMilestone,BiTask,RiMoneyDollarCircleFill,IoIosPeople]
    const icon_size=['30','28','28','28','28','28', '28']
    const icon_title=['profile','dashboard','notification','milestone','tasks','expenses','member']
    const subpage_links=["/profile","/home","/notification","/milestone","/tasks","/expenses","/members"]

    return(
    <div className={Open? styles['nav_container_open'] : styles['nav_container']}>
        <i className={Open? styles['open-i']:styles['open-i_open']}>
        <Icon 
            BeforeClick={RxCross2} 
            AfterClick={HiOutlineMenu} 
            onClick={openClose}
        /></i>
        
        <ul className={styles.nav}>
        {icon_list.map((item,index)=>(
          <li className={styles.tab} key={index}>
            {(SelectTab===index)? 
                <div className={!Open? styles['selected-icon']:styles['selected-icon-open']}>
                    <a href={subpage_links[index]}><SelectIcon Icon={item} newsize={icon_size[index]} newcolor='#4A4A4B'/></a>
                </div>
                : 
                    <div className={!Open? styles['hover-icon']: styles['hover-icon-open'] }>
                       <Link to={subpage_links[index]} > 
                            <SelectIcon Icon={item} newsize={icon_size[index]}  newcolor='#A7A7A7' onClick={()=>{Set_SelectTab(index)}} />
                        </Link>
                    </div>
                }{/* a href reloads the html, while Link just switch the routes */}
          </li>)
          )}
        </ul>
        
        <div>
        {Open && <ul className={styles['nav-titles']}>
        {icon_title.map((item,index)=>(
            <li className={styles['nav-titles-list']} key={index}>
                {(SelectTab===index)? 
                    <div className={styles['nav-titles-item']}>{item}</div>
                : <div>{item}</div>
                }
            </li>))}
        </ul>}</div>

        {!(JSON.stringify(notificationCount) === '0') 
        && <span className={styles.dot} style={{userSelect:"none"}}>{notificationCount}</span>}
    </div>

    );
}

export default NavBar;