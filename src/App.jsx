import { useState } from 'react'
import './App.css'
import SearchResults from './SearchResults'
import SearchBar from './Searchbar';
import AuthorDetail from './AuthorDetails'

function App() {
    const[searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(1);

    const handleSearch =(query) => {
        setSearchQuery(query);
        setPage(1);
    };
  return(
    <div>
        <SearchBar onSearch ={handleSearch} />
        <SearchResults searchQuery={searchQuery} page={page}/>
    </div>
  );


}

export default App
