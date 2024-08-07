

interface IconProps{
    Icon: React.ElementType;
    newsize?: string;
    newcolor?: string;
    onClick?:()=>void;
}

const SelectIcon = ({Icon, newsize, newcolor,onClick}:IconProps) => {
  return (
    <div>
        <Icon size={newsize} color={newcolor} onClick={onClick}/>
    </div>
  )
}

export default SelectIcon;