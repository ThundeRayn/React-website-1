
import { useState } from 'react';
import NavBar from './components/NavBar';
//import Notification from './components/Notification';
import Form from './components/Form';
import Test from './components/Test';
import './App.css';


function App(){

  //grouplist variables
  const [notificationList,Set_List]=useState(['notification one', 'notification two']);

  return (
  <div>
    <NavBar notificationCount={notificationList.length}/>
    {/*<Notification notifications={notificationList} onClear={()=>
      Set_List([])} update={()=>{Set_List([...notificationList, 'notification three'])}}/>*/}
    <div>
      <Form />
    </div>
  </div>)

}

export default App;