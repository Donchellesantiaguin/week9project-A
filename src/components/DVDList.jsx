import React, { useState } from "react";
import DVDCard from "./DVDCard";
import collectionData from "../assets/collection.json";

const DVDList = () => {
  const [movies, setMovies] = useState(collectionData);
  const [statuses, setStatuses] = useState({});

  const handleHeartClick = (rank) => {
    setStatuses({ ...statuses, [rank]: "liked" });
  };

  const handleQuestionClick = (rank) => {
    setStatuses({ ...statuses, [rank]: "question" });
  };

  const handleTrashClick = (rank) => {
    const updatedMovies = movies.filter((movie) => movie.rank !== rank);
    setMovies(updatedMovies);
    const newStatuses = { ...statuses };
    delete newStatuses[rank];
    setStatuses(newStatuses);
  };

  return (
    <div className="dvd-list">
      {movies.map((movie) => (
        <DVDCard
          key={movie.rank}
          movie={movie}
          onHeartClick={handleHeartClick}
          onQuestionClick={handleQuestionClick}
          onTrashClick={handleTrashClick}
          status={statuses[movie.rank]} 
        />
      ))}
    </div>
  );
};

export default DVDList;
