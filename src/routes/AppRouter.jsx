import { Routes, Route } from 'react-router-dom';

// import pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePage from '../pages/Homepage';
import SystemOverView from '../pages/SystemOverView';
import Application from '../pages/Application';
import RowSelectionPage from '../pages/RowSelectionPage';
import PotSelectionPage from '../pages/PotSelectionPage';


// router
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/systemOverView" element={<SystemOverView />} />
            <Route path="/application" element={<Application />} />
            <Route path="/rowselection" element={<RowSelectionPage/>}/> 
            <Route path="/potselection" element={<PotSelectionPage />} />
        </Routes>
    );
};

export default AppRouter;