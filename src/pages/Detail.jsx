import React from "react";
import { useParams, Link } from "react-router-dom";

export const Detail = ({ collection }) => {
  const { slug } = useParams();
  const movie = collection.find((m) => m.slug === slug);

  if (!movie) return <div>Movie not found.</div>;

  const imageUrl = new URL(`../assets/${movie.cover}`, import.meta.url).href;

  return (
    <div className="detail-container">
      <Link to="/">← Back to Collection</Link>
      <h2>{movie.name}</h2>
      <img src={imageUrl} alt={movie.name} className="dvd-cover" />
      <p>Year: {movie.year}</p>
      <p>Inspired by: {movie.inspiration}</p>
    </div>
  );
};
