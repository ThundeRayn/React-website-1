
import { useState } from 'react';
import NavBar from './components/NavBar';
//import Notification from './components/Notification';
import Form from './components/Form';
import Test from './components/Test';
import Notification from './components/Notification';
import Border from './components/Board';
import styles from './App.module.css';
import MsDisplay from './components/MsDisplay';
import MilestoneFilter from './components/MsDisplay/MilestoneFilter';
import TsDisplay from './components/TsDisplay';
import TaskFilter from './components/TsDisplay/TsFilter';

//milestone
export const mstypes = ["task goal","revenue goal"]
//tasks
export const tstypes = ["M1","M2"]



function App(){

  //grouplist variables
  const [notificationList,Set_List]=useState(['notification one', 'notification two']);
  const List_Clear=()=>{Set_List([])}
  const List_Update=()=>{Set_List(notificationList=> [...notificationList, 'notification three'])}

  //Add a Milestone
  const [Open, Set_Open] = useState(false)
  const openform = () =>{Set_Open(!Open)}

  //Milestone Display
  const [selectedType,setSeletedType] =useState("")
  const [milestones,SetMilestones] = useState([
    {id: 1, title: "Milestone 1", type:"task goal", description:"some d", deadline:"a string" },
    {id: 2, title: "Milestone 2", type:"task goal", description:"some d", deadline:"a string" },
    {id: 3, title: "Milestone 3", type:"revenue goal", amount: 2000, description:"some d", deadline:"a string" }
  ])

  const displayMilestones = selectedType 
    ? milestones.filter(m => m.type === selectedType) 
    : milestones;

  //Task Display
  const [selectedtaskType,setSeletedtaskType] =useState("")
  const [tasks,SetTasks] = useState([
    {id: 1, title: "Task 1 to build dashboard", type:"M1", priority: "high", members:["peopleA"], description:"some d", deadline:"a string" },
    {id: 2, title: "Task 2 to build milestone page", type:"M1", priority: "high", members:["peopleA","peopleB"], description:"some d", deadline:"a string" },
    {id: 3, title: "Task 3 to integrate our work", type:"M2", priority: "high", members:["peopleA"], description:"some d", deadline:"a string" }
  ])

  const displayTasks = selectedtaskType 
  ? tasks.filter(t => t.type === selectedtaskType) 
  : tasks;


  return (
  <div>
    <NavBar notificationCount={notificationList.length}/>

    <div className={styles['contents']}>
      <div className={styles.dashboard}>
        <div className={styles['notification']}>
          <Notification notifications={notificationList} onClear={List_Clear} update={List_Update} />
        </div>

        <div className={styles.border}>
          <Border/>
        </div>

        <div className={styles.display}>
          <div className="mb-3">
          <TaskFilter onSelectType={tstype => setSeletedtaskType(tstype)}/></div>
          <TsDisplay tasks={displayTasks} onDelete={(id)=>SetTasks(tasks.filter(t => t.id !== id))}/>
        </div>

        <div className={styles.display}>
          <div className="mb-3">
          <MilestoneFilter onSelectType={mstype => setSeletedType(mstype)}/></div>
          <MsDisplay milestones={displayMilestones} onDelete={(id)=>SetMilestones(milestones.filter(m => m.id !== id))}/>
        </div>

        <button onClick={openform}> add a milestone</button>
      </div>

      <Form Open={Open} Set_Open={openform} />

    </div>
  </div>)

}

export default App;