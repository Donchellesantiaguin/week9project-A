import React from "react";
import DVDList from "../components/DVDList";
import Legend from "../components/Legend";
import "../App.css";

export const Home = () => {
  return (
    <div className="header-container">
    <div className="home">
      <h1 className="title">Donnie's DVD Collection</h1>
      <p className="summary">
        I have created a list of my favorite classic Disney movies that I have as DVDs growing up as a little girl.
        I want to know if you've seen any of the movies listed. If you have, select the heart.
        If not, click the question mark. If you have and did not like it, select the trash button to delete the card.
      </p>
      <Legend />
      <DVDList />
    </div>
    </div> 
  );
};
