
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";

interface IconProps{
    onClick: ()=>void;
}
const Icon = ({onClick}:IconProps) => {
    const [SelectIcon, Set_SelectIcon] = useState(false);
    const toggle = () => {
        Set_SelectIcon(!SelectIcon);
        onClick();
    }


  if (SelectIcon) return (
    <div>
        <RxCross2 
            size={29} 
            color='#A7A7A7' 
            onClick={toggle}
        />
    </div>
  )
  return <div><HiOutlineMenu size={29} color='#A7A7A7' onClick={toggle}/></div>
}

export default Icon