import { useState } from "react";
import "./App.scss";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";
import SearchResults from "./SearchResults";
import SearchBar from "./Searchbar";
import RoutesSwitch from "./RoutesSwitch";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const AUTHOR_USERNAME = "itsaroadmap";

  return (
    
      <>
        <Homepage />
        <div>
            <SearchResultsSwitch/>
          <SearchBar onSearch={handleSearch} />
          <SearchResults searchQuery={searchQuery} />
        </div>
        <RoutesSwitch AUTHOR_USERNAME={AUTHOR_USERNAME} />
      </>
    
  );
}

export default App;
