import { Routes, Route} from "react-router-dom";
import MainPage from './Pages/MainPage';
import BiddingPage from "./Pages/BiddingPage";
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage/>} />
      <Route exact path="/bidding" element={<BiddingPage/>} />
    </Routes>  
    
  );
}

export default App;
