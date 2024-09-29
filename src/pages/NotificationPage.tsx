import { useEffect, useState } from "react";
import Test from '../components/Test';

interface Props{
    navOpen:boolean;
}

export const NotificationPage =({navOpen}:Props) =>{

    const [read,setRead] = useState('');
    //change file title
    useEffect(() => {
        document.title = 'OneTrack';
    })

    return(
        <>
        <div style={navOpen? {paddingLeft: "130px", paddingTop:"20px", transition: "all 0.5s ease-in-out"}
            :{paddingLeft: "80px", paddingTop:"20px", transition: "all 0.5s ease-in-out"}}>
            <h1 style={{fontSize:"45px",fontWeight:"200", fontStyle:"normal", userSelect:"none"}}>
                Notification</h1>

            {/* <input ref = {ref} type="text" className="form-control" style={{marginLeft:100, width:200}}/> */}
            <select className="form-select" onChange={(event)=>setRead(event.target.value)}>
                <option value=''></option>
                <option value='Unread'>unread</option>
                <option value='read'>read</option>
            </select>
            <Test/>
        </div>
        </>
    )
}