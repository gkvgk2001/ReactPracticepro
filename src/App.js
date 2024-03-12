import "./App.css";
import ImageSlider from "./components/ImageSlider";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import Accordion from "./components/accordion";

function App() {
  return (
    <div className="App">
      {/* accordion */}

      {/* <Accordion />
      <RandomColor /> */}

      {/* <StarRating noofStars={10} /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"15"}
      />
    </div>
  );
}

export default App;
