import { Routes, Route } from "react-router-dom";

// import pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/Homepage";
import SystemOverView from "../pages/SystemOverView";
import Application from "../pages/Application";
import RowSelectionPage from "../pages/RowSelectionPage";
import PotSelectionPage from "../pages/PotSelectionPage";

import Cultivation from "../pages/Cultivation.JSX";
import Growing from "../pages/Growing";
import ViewCultivation from "../pages/ViewCultivation";
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
      <Route path="/mushroom-cultivation" element={<Cultivation />} />
      <Route path="/mushroom-cultivation/view/" element={<ViewCultivation />} />
      <Route path="/mushroom-growing" element={<Growing />} />

    </Routes>
  );
};

export default AppRouter;
