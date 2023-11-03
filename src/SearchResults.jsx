import {useState, useEffect} from "react"

export default function SearchResults ({searchQuery}){
    const [searchResults, setSearchResults]= useState([]);

    useEffect(() => {
         {
            
            const loadSearch = async () => {
                
                    const response = await fetch (`https://api.unsplash.com/search/photos?query=" + ${searchQuery} + "&client_id=okGiran4jPm-EhgDiqAO1Hz0gXs05AZGOFAhNq3N3jg`

                    );
                    const data = await response.json();
                    console.log(data);
                    setSearchResults(data.results);
                
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
                    <img src={results.urls.regular} alt={results.alt_description} />
                    </div>
            ))}
          
        </div>
    );
}