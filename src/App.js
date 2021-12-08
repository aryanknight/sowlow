import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Overview from './Components/Overview/Overview';
import How from './Components/How/How';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-large">
        <Navbar/>
        <Intro/>
        <Overview/>
        <How/>
      </div>
    </div>
  );
}

export default App;
