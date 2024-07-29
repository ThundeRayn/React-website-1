import { useState } from "react";
import produce from 'immer';


const bug = () => {
    const [bugs, Set_Bugs] = useState([
        {id: 1, title: 'bug 1', fixed: false},
        {id: 2, title: 'bug 2', fixed: false}
    ])

    const handleClick = () => {
        Set_Bugs(produce(draft=>{
            const bug = draft.find(bug => bug.id === 1);
            if (bug) bug.fixed = true;
        }
        ))
    }
  return (
    <div>
        {bugs.map(bug => <p key={bug.id} color='white'>{bug.title}{bug.fixed ? "Fixed" : "New"}</p>)}
        <button onClick={handleClick}>error check</button>
        
    </div>
  )
}

export default bug