import { useState } from "react";
import "./search.css";

function Search() {
  const [search, setSearch] = useState("" as string);
  const [result, setResult] = useState([] as string[]);
  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
    //
    //setResult(["uno", "dos", "tres"]);
  };
  return (
    <>
      <div className="search">
        <input
          type="text"
          value={search}
          placeholder="search places ..."
          onChange={handleInputChange}
        />
        {search && (
          <div className="searchlist">
            {search && <small className="message">results for {search}</small>}
            {result && result.length == 0 && <span>No results</span>}
            {result &&
              result.length > 0 &&
              result.map((item) => <span key={item}>{item}</span>)}
          </div>
        )}
      </div>
    </>
  );
}
export default Search;
