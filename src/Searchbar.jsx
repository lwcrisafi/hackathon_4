import {useState, useEffect} from "react"

export default function SearchBar(props){
    const [searchQuery,setSearchQuery] =useState ("");

    const handleSearch=() =>{
        props.onSearch(searchQuery)
    };
    return(
        <div>
            <input type="text"
            value= {searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
              />
              <br/>
              <button onClick={handleSearch}>Search</button>
        </div>
    );
}