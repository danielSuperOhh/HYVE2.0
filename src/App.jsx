import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import SignIn from './components/signIn/SignIn'; // Corrected the import path
import LandingPage from './landingPage/LandingPage';
import SignUp from './components/signUp/SignUp';
import Dashboard from './Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* Add a default route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>  
    );
}

export default App;
