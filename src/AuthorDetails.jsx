import React, { useEffect, useState } from "react";
import keys from "./keys";
import { useParams } from "react-router-dom";

export default function AuthorDetail({ YOUR_ACCESS_KEY }) {
  const [authorData, setAuthorData] = useState(null);
  const [authorImages, setAuthorImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch author's information
        const infoResponse = await fetch(
          `https://api.unsplash.com/users/${AUTHOR_USERNAME}?client_id=${keys.YOUR_ACCESS_KEY}`
        );
        const authorData = await infoResponse.json();
        // console.log(authorData);
        // Fetch author's images
        const imagesResponse = await fetch(
          `https://api.unsplash.com/users/${AUTHOR_USERNAME}/photos?client_id=${keys.YOUR_ACCESS_KEY}`
        );
        const authorImages = await imagesResponse.json();

        // console.log(authorImages);

        setAuthorData(authorData);
        setAuthorImages(authorImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [username, YOUR_ACCESS_KEY]);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage * imagesPerPage < authorImages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

 const startImageIndex = (currentPage - 1) * imagesPerPage;
 const endImageIndex = startImageIndex + imagesPerPage;
 const currentImages = authorImages.slice(startImageIndex, endImageIndex);


  return (
    <div>
      <div className="author-details">
        <h1>{authorData.name}</h1>
        <h3>{authorData.username}</h3>
        <p>Downloads: {authorData.downloads}</p>
        <p>&#128420; Likes: {authorData.total_likes}</p>
      </div>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={endImageIndex >= authorImages.length}
        >
          Next
        </button>
      </div>

      <div className="author-images">
        {currentImages.map((image, index) => {
          if (index < 100) {
            return (
              <div key={index}>
                <img src={image.urls.small} alt={image.alt_description} />
                <p>Description: {image.alt_description}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
  
  

  
  

 

