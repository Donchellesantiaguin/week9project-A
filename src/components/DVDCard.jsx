import React from "react";
import heartIcon from "../assets/heart-icon.png";
import questionIcon from "../assets/question-icon.png";
import trashIcon from "../assets/trash-icon.png";
import { Link } from "react-router-dom";

const DVDCard = ({ movie, onHeartClick, onQuestionClick, onTrashClick }) => {
  const imageUrl = new URL(`../assets/${movie.cover}`, import.meta.url).href;

  return (
    <div className="dvd-card">
      <img src={imageUrl} alt={movie.name} className="dvd-cover" />
      <h3>
        <Link to={`/${movie.slug}`}>{movie.name}</Link>
      </h3>
      <p>Year: {movie.year}</p>
      <p>Location: {movie.inspiration}</p>
      <div className="card-actions">
        <img src={heartIcon} alt="Like" className="icon" onClick={() => onHeartClick(movie.rank)} />
        <img src={questionIcon} alt="Not Seen" className="icon" onClick={() => onQuestionClick(movie.rank)} />
        <img src={trashIcon} alt="Delete" className="icon" onClick={() => onTrashClick(movie.rank)} />
      </div>
    </div>
  );
};

export default DVDCard;
