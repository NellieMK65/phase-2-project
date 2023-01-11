import React from "react";
import FilmCard from "./FilmCard";

function FilmList({ films, listStyle, searchResults }) {


  return (
    <div style={listStyle}>
      {films.length ? (
        films.map((film) => <FilmCard key={film.id} film={film} />)
      ) : (
        <h1>There are no films in this list</h1>
      )}
    </div>
  );
}

export default FilmList;
