

interface IconProps{
    Icon: React.ElementType;
}

const SelectIcon = ({Icon}:IconProps) => {
  return (
    <div>
        <Icon/>
    </div>
  )
}

export default SelectIcon;