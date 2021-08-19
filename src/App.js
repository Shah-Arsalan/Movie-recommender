import "./styles.css";
import React from "react";
import { useState } from "react";

var movies = {
  thriller: [
    { name: "Seven", rating: "8/10" },
    { name: "Shutter Island", rating: "8.5/10" },
    { name: "Maze Runner", rating: "7.5/10" }
  ],
  mystery: [
    { name: "Get Out", rating: "8/10" },
    { name: "Predestination", rating: "7.7/10" },
    { name: "Zodiac", rating: "7.5/10" }
  ],
  sciFi: [
    { name: "Intersteller", rating: "9/10" },
    { name: "Blade Runner 2049", rating: "8.5/10" },
    { name: "Martian", rating: "7.5/10" }
  ]
};

export default function App() {
  const [genre, setgenre] = useState("thriller");
  function genrehandler(genre) {
    setgenre(genre);
  }
  return (
    <div className="App">
      <h1>Are you a movie buff?</h1>
      <h3>
        Well if you are then I'm sure you're gonna love my recommendations
      </h3>
      <h4>Check them out below👇</h4>
      <div>
        {Object.keys(movies).map((genre) => (
          <button
            onClick={() => genrehandler(genre)}
            style={{
              marginRight: "1.5rem",
              padding: "1rem",
              border: "solid",
              borderRadius: "1rem",
              borderColor: "black",
              textAlign: "center",
              marginLeft: "50px",
              backgroundColor: "yellow"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul style={{ display: "block" }}>
          {movies[genre].map((movie) => (
            <li
              key={movie.name}
              style={{
                margin: "auto",
                marginTop: "1rem",
                listStyle: "none",
                padding: "1rem",
                border: "solid black",
                width: "45%",
                borderRadius: "0.5rem",
                borderColor: "black",
                backgroundColor: "yellow",
                maxWidth: "250px"
              }}
            >
              <div style={{ fontSize: "larger" }}>{movie.name}</div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
