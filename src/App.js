import { Routes, Route} from "react-router-dom";
import MainPage from './Pages/MainPage';
import BiddingPage from "./Pages/BiddingPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Components/Authentication/SignUp";
import ResetPage from "./Pages/ResetPage";
import FAQPage from "./Pages/FAQPage";
import './App.css';
import LoginBiddingPage from "./Pages/LoginBiddingPage";
import UserPage from "./Pages/UserPage";
import BidNowPage from "./Pages/BidNowPage";
import PrivacyPage from "./Pages/PrivacyPage";
import Terms from "./Components/PrivacyPolicy/Terms";
import TermsPage from "./Pages/TermsPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage/>} />
      <Route exact path="/bidding" element={<BiddingPage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/signup" element={<SignupPage/>} />
      <Route exact path="/reset" element={<ResetPage/>} />
      <Route exact path="/faq" element={<FAQPage/>} />
      <Route exact path="/user" element={<LoginBiddingPage/>} />
      <Route exact path="/user-panel" element={<UserPage/>} />
      <Route exact path="/bid-now" element={<BidNowPage/>} />
      <Route exact path="/privacy-policy" element={<PrivacyPage/>} />
      <Route exact path="/terms" element={<TermsPage/>} />
    </Routes>  
    
  );
}

export default App;
