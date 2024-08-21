
interface IconProps{
    Icon: React.ElementType;
    newsize?: string;
    newcolor?: string;
    newwidth?:string;
    newheight?:string;
    linkto?:string;
    onClick?:()=>void;
}

const SelectIcon = ({Icon, newsize, newcolor, newwidth, newheight, linkto, onClick}:IconProps) => {
  return (
    <div style={{width: newwidth, height: newheight}} onClick={onClick}>
      <Icon size={newsize} color={newcolor} to={"/home"}/>
    </div>
  )
}

export default SelectIcon;