import { Routes, Route } from "react-router-dom";

// routes
import Login from "./pages/Auth/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Video from "./pages/Video/Video";
import Packer from "./pages/Packer/Packer";
import Users from "./pages/Users/Users";
import LiveStream from "./pages/LiveStream/LiveStream";
import Settings from "./pages/Settings/Settings";
import Camera from "./pages/Settings/Camera/Camera";
import Workstation from "./pages/Settings/Workstation/Workstation";
import ProtectedRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardforadmin" element={<ProtectedRoutes Component={Dashboard} />} />
        <Route path="/dashboardforsecurity" element={<ProtectedRoutes Component={Dashboard} />} />
        <Route path="/dashboardforpacker" element={<ProtectedRoutes Component={Packer} />} />
        <Route path="/users" element={<ProtectedRoutes Component={Users} />} />
        <Route path="/livestream" element={<ProtectedRoutes Component={LiveStream} />} />
        <Route path="/livestreamforsecurity" element={<ProtectedRoutes Component={LiveStream} />} />
        <Route path="/settings" element={<ProtectedRoutes Component={Settings} />} />
        <Route path="/settings/cameras" element={<ProtectedRoutes Component={Camera} />} />
        <Route
          path="/settings/workstations"
          element={<ProtectedRoutes Component={Workstation} />}
        />
        <Route path="/video" element={<ProtectedRoutes Component={Video} />} />
      </Routes>
    </>
  );
}
