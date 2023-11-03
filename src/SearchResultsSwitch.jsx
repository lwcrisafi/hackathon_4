import React, { useState } from "react"; // Import useState
import { BrowserRouter as Router, Route } from "react-router-dom";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";

export default function SearchResultsSwitch() {
  // initializing searchResults as a state variable
  const [searchResults, setSearchResults] = useState([]);
  const isEmptySearch = searchResults.length === 0;

  // might need to update
  // Update searchResults when you have search results
  // For example, when a search is performed
  // setSearchResults(newResults);

  return (
    <Router>
      {isEmptySearch ? (
        <Route path="/" component={Searchbar} />
      ) : (
        <Route path="/" component={SearchResults} />
      )}
    </Router>
  );
}