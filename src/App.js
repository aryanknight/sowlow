import { Routes, Route} from "react-router-dom";
import MainPage from './Pages/MainPage';
import BiddingPage from "./Pages/BiddingPage";
import './App.css';
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Components/Authentication/SignUp";
import ResetPage from "./Pages/ResetPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage/>} />
      <Route exact path="/bidding" element={<BiddingPage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/signup" element={<SignupPage/>} />
      <Route exact path="/reset" element={<ResetPage/>} />
    </Routes>  
    
  );
}

export default App;
