import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import UserDashboard from "./pages/User/Home";
import AdminDashboard from "./pages/Admin/Dashboard";
import History from "./pages/User/History";
import Learn from "./pages/User/Learn";
import Feedback from "./pages/User/Feedback";
import Recognize from "./pages/User/Recognize";
import Profile from "./pages/User/Profile";
import Settings from "./pages/Admin/settings";
import Users from "./pages/Admin/Users";
import AdminFeedback from "./pages/Admin/Feedback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user/home" element={<UserDashboard />} />
      <Route path="/user/recognize" element={<Recognize />} />
      <Route path="/user/history" element={<History />} />
      <Route path="/user/learn" element={<Learn />} />
      <Route path="/user/feedback" element={<Feedback />} />
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/feedback" element={<AdminFeedback />} />
    </Routes>
  );
}

export default App;
