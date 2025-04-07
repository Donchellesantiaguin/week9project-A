import React, { useState } from "react";
import collectionData from "./assets/collection.json";
import DVDCard from "./components/DVDCard";
import NewItemForm from "./components/NewItemForm";
import { Routes, Route } from "react-router-dom";
import { Detail } from "./pages/Detail";
import Legend from "./components/Legend";
import "./App.css";

function App() {
  const [collection, setCollection] = useState(collectionData);

  const addNewItem = (item) => {
    setCollection([...collection, item]);
  };

  const handleHeartClick = (rank) => {
    console.log("Liked movie with rank:", rank);
  };

  const handleQuestionClick = (rank) => {
    console.log("Haven’t seen movie with rank:", rank);
  };

  const handleTrashClick = (rank) => {
    setCollection(collection.filter((m) => m.rank !== rank));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="home-page">
            <div className="header-container">
              <h1 className="title">Donnie’s DVD Collection</h1>
              <p className="summary">
                I have created a list of my favorite classic Disney movies that I have as DVDs growing up as a little girl.
                I want to know if you've seen any of the movies listed. If you have, select the heart.
                If not, click the question mark. If you have and did not like it, select the trash button to delete the card.
              </p>
              <Legend />
            </div>
            <div className="dvd-list">
              {collection.map((movie) => (
                <DVDCard
                  key={movie.rank}
                  movie={movie}
                  onHeartClick={handleHeartClick}
                  onQuestionClick={handleQuestionClick}
                  onTrashClick={handleTrashClick}
                />
              ))}
            </div>
            <NewItemForm onAddItem={addNewItem} />
          </div>
        }
      />
      <Route path="/:slug" element={<Detail collection={collection} />} />
    </Routes>
  );
}

export default App;
