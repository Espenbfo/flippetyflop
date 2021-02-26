import logo from './logo.svg';
import './App.css';
import burger from "./images/burger.jpg"
import pizza from "./images/pizza.jpg"
import Rotator from "./components/Rotator";
function App() {
  return (
    <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Rotator width={100} height={30} flippety={<span>Flippety</span>} floppety={<span>Floppety</span>} ></Rotator>
      <Rotator width={300} height={500} flippety={<img src={burger} alt={"burger"}></img>} floppety={<img src={pizza} alt={"pizza"}></img>} ></Rotator>
      <Rotator width={300} height={200} flippety={<form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <input/><input/><input/><button>Logg inn</button></form>} floppety={<form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <input/><input/><input/><button>Registrer deg</button></form>} ></Rotator>
    </div>
  );
}

export default App;
