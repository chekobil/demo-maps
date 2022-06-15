import "./App.css";
import Map from "./components/Map";
import Search from "./components/Search";

function App() {
  const center = { lat: 40.4167754, lng: -3.7037902 }; // Madrid
  const zoom = 12;
  return (
    <div className="app">
      <h1>Maps Demo</h1>
      <Search />
      <Map center={center} zoom={zoom} />
    </div>
  );
}

export default App;
