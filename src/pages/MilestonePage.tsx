import { useState } from 'react';
import '../components/MsDisplay';
import * as loadData from '../data/loadData';
import MilestoneFilter from '../components/MsDisplay/MilestoneFilter';
import MsDisplay from '../components/MsDisplay';

interface Props{
    navOpen:boolean;
}

export const MilestonePage =({navOpen}:Props) =>{

    
  //Milestone Display

  const [selectedType, setSeletedType] = useState("")
  const [milestones, SetMilestones] = useState(loadData.milestones)

  const displayMilestones = selectedType
    ? loadData.milestones.filter(m => m.type === selectedType)
    : loadData.milestones;
    
    return(

        <div style={navOpen? {paddingLeft: "130px", paddingTop:"20px", transition: "all 0.5s ease-in-out"}
                    :{paddingLeft: "80px", paddingTop:"20px", transition: "all 0.5s ease-in-out"}}>

            <h1 style={{fontSize:"45px",fontWeight:"200", fontStyle:"normal"}}>Milestone page</h1>
            <div className="mb-3">
              <MilestoneFilter onSelectType={mstype => setSeletedType(mstype)} /></div>
            <MsDisplay milestones={displayMilestones} onDelete={(id) => SetMilestones(milestones.filter(m => m.id !== id))} />
        </div>
    )
}