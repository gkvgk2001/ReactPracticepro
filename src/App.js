import "./App.css";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import Accordion from "./components/accordion";

function App() {
  return (
    <div className="App">
      {/* accordion */}

      {/* <Accordion />
      <RandomColor /> */}

      <StarRating noofStars={10} />
    </div>
  );
}

export default App;
