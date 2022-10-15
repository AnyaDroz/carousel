import "./App.css";
import CarouselTile from "./components/carouselTile/CarouselTile.jsx";
import CarouselTileActive from "./components/carouselTileActive/CarouselTileActive.jsx";
function App() {
  return (
    <div className="App">
      <CarouselTile />
      <CarouselTileActive />
    </div>
  );
}

export default App;
