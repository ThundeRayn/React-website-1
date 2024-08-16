import styles from './TsDisplay.module.css';
import { RxCross2 } from "react-icons/rx";

interface Task {
    id:number;
    title:string;
    type:string;
    amount?:number;
    description:string;
    deadline:string;
    members:string[];
    priority:string;
}
interface TsProps{
    tasks: Task[];
    onDelete:(id:number) => void;
}
const TsDisplay = ({tasks, onDelete}: TsProps) => {

  if (tasks.length === 0) return null;

  return (
    <div>

        <table className={styles['table']}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Deadline</th>
                    <th>Members</th>
                    <th>priority</th>
                    <th> </th>
                </tr>
            </thead>

            <tbody>
                {tasks.map(tasks => <tr key={tasks.id}>
                    <td>{tasks.title}</td>
                    <td>{tasks.deadline}</td>
                    <td>{tasks.members.toString()}</td>
                    <td>{tasks.priority}</td>
                    <td><RxCross2 onClick={()=>onDelete(tasks.id)} size={20}/></td>
                </tr>)}
            </tbody>

        </table>
    </div>
  )
}

export default TsDisplay;