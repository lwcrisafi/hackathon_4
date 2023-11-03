import { useState } from "react";
import "./App.scss";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";
import SearchResults from "./SearchResults";
import SearchBar from "./Searchbar";
import AuthorDetail from "./AuthorDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <>
        <Homepage />
        <div>
          <SearchBar onSearch={handleSearch} />
          <SearchResults searchQuery={searchQuery} />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
