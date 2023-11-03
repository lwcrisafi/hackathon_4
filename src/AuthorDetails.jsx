import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import keys from "./keys";

export default function AuthorDetail({ AUTHOR_USERNAME, YOUR_ACCESS_KEY }) {
  const [authorData, setAuthorData] = useState(null);
  const [authorImages, setAuthorImages] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [AUTHOR_USERNAME, YOUR_ACCESS_KEY]);

  useParams(AUTHOR_USERNAME);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="author-details">
        <h1>{authorData.name}</h1>
        <h3>{authorData.username}</h3>
        <p>Downloads: {authorData.downloads}</p>
        <p>&#128420; Likes: {authorData.total_likes}</p>
      </div>

      <div className="author-images">
        {authorImages.map((image, index) => {
          if (index < 3) {
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
