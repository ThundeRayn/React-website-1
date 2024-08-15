
import { useState } from 'react';
import NavBar from './components/NavBar';
//import Notification from './components/Notification';
import Form from './components/Form';
import Test from './components/Test';
import Notification from './components/Notification';
import Border from './components/Board';
import styles from './App.module.css';


function App(){

  //grouplist variables
  const [notificationList,Set_List]=useState(['notification one', 'notification two']);
  const List_Clear=()=>{Set_List([])}
  const List_Update=()=>{Set_List(notificationList=> [...notificationList, 'notification three'])}

  //Add a Milestone
  const [Open, Set_Open] = useState(false);
  const openform = () =>{Set_Open(!Open)}


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
      </div>

      <Form Open={Open} Set_Open={openform} />


      <button onClick={openform}> add a milestone</button>
    </div>
  </div>)

}

export default App;