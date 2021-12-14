import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Email from "./pages/Email";
import Form from "./pages/Form";
import Chart from "./pages/Chart";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import './App.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='email' element={<Email />} />
        <Route path='form' element={<Form />} />
        <Route path='chart' element={<Chart />} />
        <Route path='profile' element={<Profile />} />
        <Route path='editprofile' element={<EditProfile />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;