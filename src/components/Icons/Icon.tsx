
import { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";

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
        <RiDashboardFill 
            size={29} 
            color='grey' 
            onClick={toggle}
        />
    </div>
  )
  return <div><RiDashboardFill size={29} onClick={toggle}/></div>
}

export default Icon