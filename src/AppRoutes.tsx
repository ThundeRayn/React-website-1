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
 
export const AppRoutes =() => {
    const [Open, Set_Open] = useState(false);
    return(
        <Router>
            <NavBar notificationCount={1} Open={Open} Set_Open={()=>Set_Open(!Open)}/>
            <Routes>

                <Route path="*" element={<NotFoundPage/>}/>

                <Route path="/" element={<SignInPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>



                <Route path="/home" element={<HomePage navOpen={Open}/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/notification" element={<NotificationPage/>}/>
                <Route path="/milestone" element={<MilestonePage navOpen={Open}/>}/>
                <Route path="/tasks" element={<TaskPage navOpen={Open}/>}/>
                <Route path="/expenses" element={<ExpensePage/>}/>
                <Route path="/members" element={<MembersPage/>}/>

                {/*ReDirect paths */}
                {['/Home', '/dashboard','/Dashboard','/main','/Main'].map(path => <Route path={path} element={<Navigate to="/"/>}/>)}
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