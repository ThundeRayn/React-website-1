import { useState } from "react";
import * as loadData from '../data/loadData';
import Notification from "../components/Notification";
import Border from '../components/Board';
import TsDisplay from '../components/TsDisplay';
import TaskFilter from '../components/TsDisplay/TsFilter';

interface Props{
    navOpen:boolean
}
export const HomePage =({navOpen}:Props) =>{

    //grouplist variables
    const [notificationList, Set_List] = useState(loadData.notifications);
    const List_Clear = () => { Set_List([]) }
    const List_Update = () => { Set_List(notificationList => [...notificationList, 'notification three']) }

    //task consts
    const [selectedtaskType, setSeletedtaskType] = useState("")
    const [tasks, SetTasks] = useState(loadData.tasks)
  
    const displayTasks = selectedtaskType
      ? tasks.filter(t => t.type === selectedtaskType)
      : tasks;

    return(
        <>
        {/*<NavBar notificationCount={1} page={1} />*/}
            <div style={navOpen? {paddingLeft: "130px", paddingTop:"20px", transition: "all 0.5s ease-in-out"}
                    :{paddingLeft: "80px", paddingTop:"20px", transition: "all 0.5s ease-in-out"}}>

                <h1 style={{fontSize:"45px",fontWeight:"200", fontStyle:"normal"}}>Home page</h1>

                <div style={{display:"flex"}}>
                    <div style={{display:"inline-block"}}>
                        <Notification notifications={notificationList} onClear={List_Clear} update={List_Update} />
                    </div>
                    <div style={{display:"inline-block",paddingLeft:"20px"}}><Border /></div>
                </div>

                <div style={{paddingTop:"20px"}}>
                    <TaskFilter onSelectType={tstype => setSeletedtaskType(tstype)} />
                    <TsDisplay tasks={displayTasks} onDelete={(id) => SetTasks(tasks.filter(t => t.id !== id))} />
                </div>
          </div>
        </>
    )
}