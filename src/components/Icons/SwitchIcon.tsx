import { useState } from "react";
import styled from 'styled-components';

const Clickable = styled.div`
    cursor: pointer
`;


interface IconProps{
    BeforeClick: React.ElementType;
    AfterClick: React.ElementType;
    onClick: ()=>void;
}
const Icon = ({onClick,BeforeClick,AfterClick}:IconProps) => {
    const [SelectIcon, Set_SelectIcon] = useState(false);
    const toggle = () => {
        Set_SelectIcon(!SelectIcon);
        onClick();
    }


  if (SelectIcon) return (
    <Clickable>
        <BeforeClick 
            size={29} 
            color='#A7A7A7' 
            onClick={toggle}
        />
    </Clickable>
  )
  return <Clickable><AfterClick size={29} color='#A7A7A7' onClick={toggle}/></Clickable>
}

export default Icon