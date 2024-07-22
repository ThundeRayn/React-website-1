
import ListGroup from "./components/ListGroup";
import './App.css';
import { MdAccountCircle } from "react-icons/md";
import Button from "./components/Button/Button";
import Icon from "./components/Icons/Icon";


function App(){
  //grouplist variables
  let items = ["Hamilton","Toronto","Richmond Hill","new York"];
  const handleSelectItem=(item:string) => {
    console.log(item);
  }


  return <div>
    <MdAccountCircle size='30'/>
    <Icon onClick={()=>console.log('clicked')}/>
    <Button onClick={()=>{}}> profile </Button>
    <ListGroup 
      items={items} 
      heading={"Cities"} 
      onSelectItem={handleSelectItem}
    />
  </div>

}

export default App;