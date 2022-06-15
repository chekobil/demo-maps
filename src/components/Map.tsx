import { useState } from "react";
import "./map.css";
import apiKey from "../secrets/google-maps-api";
import { Loader } from "@googlemaps/js-api-loader";
//
import Search from "./Search";

let map: google.maps.Map;
interface PropsType {
  center: { lat: number; lng: number };
  zoom: number;
}

function Map(props: PropsType) {
  const [mapObj, setMapObj] = useState<google.maps.Map>();
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

    // SEARCH INPUT
    let markers: google.maps.Marker[] = [];
    // Create the search box and link it to the UI element.
    const input = document.getElementById("input-places") as HTMLInputElement;
    const searchBox = new google.maps.places.SearchBox(input);
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (places && places.length == 0) {
        return;
      }
      const bounds = new google.maps.LatLngBounds();

      if (places) {
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }
          createMarker(place);
          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      }
    });
    function createMarker(place: google.maps.places.PlaceResult) {
      if (!place.geometry || !place.geometry.location) return;

      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
    }
  });

  return (
    <>
      <Search />
      <div id="map"></div>
    </>
  );
}

export default Map;
