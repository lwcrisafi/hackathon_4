import { useState } from 'react'
import './App.css'
import SearchResults from './SearchResults'
import SearchBar from './Searchbar';

function App() {
    const[searchQuery, setSearchQuery] = useState("");

    const handleSearch =(query) => {
        setSearchQuery(query);
    };
  return(
    <div>
        <SearchBar onSearch ={handleSearch} />
        <SearchResults searchQuery={searchQuery}/>
    </div>
  );


}

export default App
