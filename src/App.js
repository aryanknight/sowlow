import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-large">
        <Navbar/>
        <Intro/>
      </div>
    </div>
  );
}

export default App;
