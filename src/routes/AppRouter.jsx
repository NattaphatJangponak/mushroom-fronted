import { Routes, Route } from "react-router-dom";

// import pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/Homepage";
import SystemOverView from "../pages/SystemOverView";
import Application from "../pages/Application";
import RowSelectionPage from "../pages/RowSelectionPage";
import PotSelectionPage from "../pages/PotSelectionPage";

 
import FarmType from "../pages/FarmType";
import TypeMushrooms from "../pages/TypeMushrooms";
import Device from "../pages/Device";

import Cultivation from "../pages/Cultivation.JSX";
import Growing from "../pages/Growing";
import ViewCultivation from "../pages/ViewCultivation";
import ViewGrowing from "../pages/ViewGrowing";
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
      <Route path="/rowselection" element={<RowSelectionPage />} />
      <Route path="/potselection" element={<PotSelectionPage />} />
       
      <Route path="/farmtype" element={<FarmType />} />      
      <Route path="/typemushrooms" element={<TypeMushrooms/>} />
      <Route path="/device" element={<Device />} />
      <Route path="/mushroom-cultivation" element={<Cultivation />} />
      <Route path="/mushroom-cultivation/view/" element={<ViewCultivation />} />
      <Route path="/mushroom-growing" element={<Growing />} />
      <Route path="/mushroom-growing/view/" element={<ViewGrowing />} />
    </Routes>
  );
};

export default AppRouter;
