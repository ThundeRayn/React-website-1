import styles from './TsFilter.module.css';
import {tstypes} from '../../data/loadData';

interface Props{
    onSelectType: (type:string)=>void;
}

const ExpanseFilter = ({onSelectType}:Props) => {
  return (
    <div>
        <select className={styles['form-select']} onChange={(event)=> onSelectType(event.target.value)}>
            <option value="">all</option>
            {tstypes.map(tstype=><option key={tstype} value={tstype}> {tstype}</option>)}
        </select>
    </div>
  )
}

export default ExpanseFilter;