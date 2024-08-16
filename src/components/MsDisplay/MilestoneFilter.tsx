import styles from './MilestoneFilter.module.css';
import {mstypes} from '../../App';

interface Props{
    onSelectType: (type:string)=>void;
}

const ExpanseFilter = ({onSelectType}:Props) => {
  return (
    <div>
        <select className={styles['form-select']} onChange={(event)=> onSelectType(event.target.value)}>
            <option value="">all</option>
            {mstypes.map(mstype=><option key={mstype} value={mstype}> {mstype}</option>)}
        </select>
    </div>
  )
}

export default ExpanseFilter;