
import { useState } from 'react';
import * as loadData from '../data/loadData';
import TsDisplay from '../components/TsDisplay';
import TaskFilter from '../components/TsDisplay/TsFilter';

interface Props{
    navOpen:boolean;
}

export const TaskPage =({navOpen}:Props) =>{
    const [selectedtaskType, setSeletedtaskType] = useState("")
    const [tasks, SetTasks] = useState(loadData.tasks)
  
    const displayTasks = selectedtaskType
      ? tasks.filter(t => t.type === selectedtaskType)
      : tasks;
    
    return(
        <>
        <div style={navOpen? {paddingLeft: "130px", paddingTop:"20px", userSelect:"none",transition: "all 0.5s ease-in-out"}
                    :{paddingLeft: "80px", paddingTop:"20px", transition: "all 0.5s ease-in-out"}}>

            <h1 style={{fontSize:"45px",fontWeight:"200", fontStyle:"normal", userSelect:"none"}}>Task page</h1>
            <TaskFilter onSelectType={tstype => setSeletedtaskType(tstype)} />
            <TsDisplay tasks={displayTasks} onDelete={(id) => SetTasks(tasks.filter(t => t.id !== id))} />
        </div>
        
        {/*<NavBar notificationCount={1} page={4} />*/}
        </>
    )
}