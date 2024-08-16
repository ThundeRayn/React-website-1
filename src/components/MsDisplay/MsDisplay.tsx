import styles from './MsDisplay.module.css';

interface Milestone {
    id:number;
    title:string;
    type:string;
    amount?:number;
    description:string;
    deadline:string;
}
interface MsProps{
    milestones: Milestone[];
    onDelete:(id:number) => void;
}
const MsDisplay = ({milestones, onDelete}: MsProps) => {

  if (milestones.length === 0) return null;

  return (
    <div>

        <table className={styles['table']}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Desctiption</th>
                    <th>Deadline</th>
                    <th> </th>
                </tr>
            </thead>

            <tbody>
                {milestones.map(milestone => <tr key={milestone.id}>
                    <td>{milestone.title}</td>
                    <td>{milestone.type}</td>
                    <td>{milestone.amount}</td>
                    <td>{milestone.description}</td>
                    <td>{milestone.deadline}</td>
                    <td><button 
                        className={styles['delete-btn']} 
                        onClick={()=>onDelete(milestone.id)}>Delete</button></td>
                </tr>)}
            </tbody>

        </table>
    </div>
  )
}

export default MsDisplay;