import {useState, useEffect} from "react"
import keys from './keys';

export default function SearchResults ({searchQuery}){
    const [searchResults, setSearchResults]= useState([]);
    const apiKey= keys.YOUR_ACCESS_KEY;
    const [page, setPage] = useState (1);

    useEffect(() => {
        if (searchQuery) {
            
            const loadSearch = async () => {
                try{
                    
                    const response = await fetch (`https://api.unsplash.com/search/photos?query=" + ${searchQuery} + &client_id=${apiKey}&per_page=12&page=${page}`

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
    }, [searchQuery,page]);

    const handleLoadMore = () =>{
        setPage(page +1);
    };
    const handleLoadPrevious = () =>{
        setPage(page - 1);
    }
    return(
        <div>
            <h2>Search Results</h2>
            {searchResults.map((results) => (
                <div key={results.id}>
                    <h3>Author: {results.user.name}</h3>
                    <p>Description: {results.alt_description}</p>
                    <img src={results.urls.small} alt={results.alt_description} />
                    </div>
            ))}
          <br />
          <button onClick={handleLoadPrevious} disabled = {page ===1}>Previous</button>
          <button onClick =
          {handleLoadMore}> Next</button>
          <br/>
          Current Page: {page}
        </div>
    );
}