import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import './App.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;