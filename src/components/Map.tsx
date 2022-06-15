import "./map.css";
import apiKey from "../secrets/google-maps-api";
import { Loader } from "@googlemaps/js-api-loader";

let map: google.maps.Map;
interface PropsType {
  center: { lat: number; lng: number };
  zoom: number;
}

function Map(props: PropsType) {
  const mapOptions = { ...props };
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
