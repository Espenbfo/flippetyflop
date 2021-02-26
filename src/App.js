import logo from './logo.svg';
import './App.css';

import Rotator from "./components/Rotator";
function App() {
  return (
    <div className="App">
      <Rotator flippety={<span>Flippety</span>} floppety={<span>Floppety</span>} ></Rotator>
    </div>
  );
}

export default App;
