import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
//import pages
import {NotFoundPage} from './pages/NotFoundPage';
import { HomePage } from "./pages/Home";
import {ProfilePage} from './pages/ProfilePage';
import {NotificationPage} from './pages/NotificationPage';
import {MilestonePage} from './pages/MilestonePage';
import {TaskPage} from './pages/TaskPage';
import {ExpensePage} from './pages/ExpensePage';
import {MembersPage} from './pages/MembersPage';
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

import NavBar from "./components/NavBar";
import { useState } from "react";
import * as loadData from './data/loadData';
 
export const AppRoutes =() => {
    const [Open, Set_Open] = useState(false);
    return(
        <Router>
            <NavBar notificationCount={loadData.notifications.length} Open={Open} Set_Open={()=>Set_Open(!Open)}/>
            <Routes>

                <Route path="*" element={<NotFoundPage/>}/>

                <Route path="/" element={<SignInPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>



                <Route path="/home" element={<HomePage navOpen={Open}/>}/>
                <Route path="/profile" element={<ProfilePage navOpen={Open}/>}/>
                <Route path="/notification" element={<NotificationPage navOpen={Open}/>}/>
                <Route path="/milestone" element={<MilestonePage navOpen={Open}/>}/>
                <Route path="/tasks" element={<TaskPage navOpen={Open}/>}/>
                <Route path="/expenses" element={<ExpensePage navOpen={Open}/>}/>
                <Route path="/members" element={<MembersPage navOpen={Open}/>}/>

                {/*ReDirect paths */}
                {['Signin', 'signin', 'SignIn','login'].map(path => <Route path={path} element={<Navigate to="/"/>}/>)}

                {['/Home', '/dashboard','/Dashboard','/main','/Main'].map(path => <Route path={path} element={<Navigate to="/home"/>}/>)}
                {['Profile', 'user', 'User'].map(path => <Route path={path} element={<Navigate to="/profile"/>}/>)}
                {['Notification', 'Notifications', 'notifications'].map(path => <Route path={path} element={<Navigate to="/notification"/>}/>)}
                {['Milestone', 'Milestones', 'milestones'].map(path => <Route path={path} element={<Navigate to="/milestone"/>}/>)}
                {['Task', 'Tasks', 'task'].map(path => <Route path={path} element={<Navigate to="/tasks"/>}/>)}
                {['Expense', 'Expenses', 'expense'].map(path => <Route path={path} element={<Navigate to="/expenses"/>}/>)}
                {['Members', 'Member', 'member'].map(path => <Route path={path} element={<Navigate to="/members"/>}/>)}
                
            </Routes>
        </Router>
    )
}