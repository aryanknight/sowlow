import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Overview from './Components/Overview/Overview';
import How from './Components/How/How';
import Features from './Components/Features/Features';
import Roadmap from './Components/Roadmap/Roadmap';
import Team from './Components/Team/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-large">
        <Navbar/>
        <Intro/>
        <Overview/>
        <How/>
        <Features/>
        <Roadmap/>
        <Team/>
      </div>
    </div>
  );
}

export default App;
