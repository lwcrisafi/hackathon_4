import { useState } from "react";
import "./App.scss";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";
import SearchResults from "./SearchResults";
import SearchBar from "./Searchbar";
import AuthorDetail from "./AuthorDetails";
import SearchResultsSwitch from "./SearchResultsSwitch";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    
      <>
        <Homepage />
        <div>
            <SearchResultsSwitch/>
          <SearchBar onSearch={handleSearch} />
          <SearchResults searchQuery={searchQuery} />
        </div>
      </>
    
  );
}

export default App;
