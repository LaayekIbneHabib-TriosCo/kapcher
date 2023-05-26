import { Routes, Route } from "react-router-dom";

// routes
import Login from "./pages/Auth/Login/Login";
import Admin from "./pages/Admin/Admin";
import Video from "./pages/Video/Video";
import Packer from "./pages/Packer/Packer";
import Users from "./pages/Users/Users";
import LiveStream from "./pages/LiveStream/LiveStream";
import Settings from "./pages/Settings/Settings";
import Cameras from "./pages/Settings/Cameras/Cameras";
import Workstations from "./pages/Settings/Workstations/Workstations";

export default function App() {
  function handleSubmit({ isAdmin, isPacker, isSecurity }) {
    if (isAdmin) {
      console.log("Admin");
    } else if (isPacker) {
      console.log("Packer");
    } else if (isSecurity) {
      console.log("Security");
    } else {
      console.log("You're no one");
    }
  }

  return (
    <>
      <Routes>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" element={<Login onSubmit={handleSubmit} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/video" element={<Video />} />
        <Route path="/packer" element={<Packer />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/livestream" element={<LiveStream />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/cameras" element={<Cameras />} />
        <Route path="/settings/workstations" element={<Workstations />} />
      </Routes>
    </>
  );
}

{
  /* <Route
  path="/admin"
  render={() => (isLoggedIn ? <Dashboard handleLogout={handleLogout} /> : <Navigate to="/login" />)}
/>; */
}
