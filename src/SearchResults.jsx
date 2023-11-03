import {useState, useEffect} from "react"
import keys from './keys';

export default function SearchResults ({searchQuery}){
    const [searchResults, setSearchResults]= useState([]);
    const apiKey= keys.YOUR_ACCESS_KEY;

    useEffect(() => {
        if (searchQuery) {
            
            const loadSearch = async () => {
                try{
                    
                    const response = await fetch (`https://api.unsplash.com/search/photos?query=" + ${searchQuery} + &client_id=${apiKey}&per_page=12`

                    );
                    const data = await response.json();
                    console.log(data);
                    setSearchResults(data.results);
                }catch (error){
                    console.error ("Error fetching data:", error);
                }
                
            };
            loadSearch();
        }
    }, [searchQuery]);

    return(
        <div>
            <h2>Search Results</h2>
            {searchResults.map((results) => (
                <div key={results.id}>
                    <h3>{results.alt_description}</h3>
                    <img src={results.urls.small} alt={results.alt_description} />
                    </div>
            ))}
          
        </div>
    );
}