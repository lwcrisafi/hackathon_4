import SearchResults from "./SearchResults";
import SearchBar from "./Searchbar";
import { useState } from "react";

export default function SearchParent() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <SearchResults searchQuery={searchQuery} />
    </>
  );
}
