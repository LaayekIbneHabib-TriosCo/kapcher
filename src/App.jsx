import { Routes, Route } from "react-router-dom";

// routes
import Login from "./pages/Auth/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Video from "./pages/Video/Video";
import Packer from "./pages/Packer/Packer";
import Users from "./pages/Users/Users";
import LiveStream from "./pages/LiveStream/LiveStream";
import Settings from "./pages/Settings/Settings";
import Cameras from "./pages/Settings/Cameras/Cameras";
import Workstations from "./pages/Settings/Workstations/Workstations";
import ProtectedRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardforadmin" element={<ProtectedRoutes Component={Dashboard} />} />
        <Route path="/dashboardforsecurity" element={<Dashboard />} />
        <Route path="/dashboardforpacker" element={<Packer />} />
        <Route path="/users" element={<Users />} />
        <Route path="/livestream" element={<LiveStream />} />
        <Route path="/livestreamforsecurity" element={<LiveStream />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/cameras" element={<Cameras />} />
        <Route path="/settings/workstations" element={<Workstations />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </>
  );
}
