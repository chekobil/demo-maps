import "./map.css";
import apiKey from "../secrets/google-maps-api";
import { Loader } from "@googlemaps/js-api-loader";

let map: google.maps.Map;
const mapOptions = {
  center: { lat: 40.4167754, lng: -3.7037902 },
  zoom: 12,
};

function Map() {
  const loader = new Loader({
    apiKey: apiKey,
    version: "weekly",
    libraries: ["places"],
  });

  loader.load().then(() => {
    map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      mapOptions
    );
  });
  return <div id="map"></div>;
}

export default Map;
