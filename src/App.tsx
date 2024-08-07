
import { useState } from 'react';
import NavBar from './components/NavBar';
//import Notification from './components/Notification';
import Form from './components/Form';
import Test from './components/Test';
import Notification from './components/assets/Notification';
import styles from './App.module.css';


function App(){

  //grouplist variables
  const [notificationList,Set_List]=useState(['notification one', 'notification two']);
  const List_Clear=()=>{Set_List([])}
  const List_Update=()=>{Set_List(notificationList=> [...notificationList, 'notification three'])}


  return (
  <div>
    <NavBar notificationCount={notificationList.length}/>

    <div className={styles['contents']}>
      <Form />

      <div className={styles['notification']}>
      <Notification notifications={notificationList} onClear={List_Clear} update={List_Update} /></div>
    </div>
  </div>)

}

export default App;