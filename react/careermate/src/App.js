import './App.css';
import Login from "./pages/login/Index";
import Register from "./pages/register/index";
import JobList from "./pages/jobs/JobList";
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  const isAuthenticated = () => {
    // Check if the user is authenticated (e.g., check for a token in localStorage)
    return true; // Replace with your actual authentication logic
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path='/home' element={isAuthenticated() ? <Home /> : <Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
   

export default App;
