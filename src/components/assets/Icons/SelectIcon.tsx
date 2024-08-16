
interface IconProps{
    Icon: React.ElementType;
    newsize?: string;
    newcolor?: string;
    newwidth?:string;
    newheight?:string;
    onClick?:()=>void;
}

const SelectIcon = ({Icon, newsize, newcolor, newwidth, newheight,onClick}:IconProps) => {
  return (
    <div style={{width: newwidth, height: newheight}} onClick={onClick}>
      <Icon size={newsize} color={newcolor}/>
    </div>
  )
}

export default SelectIcon;