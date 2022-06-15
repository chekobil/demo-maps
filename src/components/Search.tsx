import { useState } from "react";
import axios from "axios";
import apiKey from "../secrets/google-maps-api";
import "./search.css";

interface ConfigType {
  method: string;
  url: string;
  headers: any;
}

function Search() {
  const [search, setSearch] = useState("" as string);
  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          id="input-places"
          value={search}
          placeholder="search places ..."
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
export default Search;
