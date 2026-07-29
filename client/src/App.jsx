import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;