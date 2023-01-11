import React, { useState,useMemo  } from "react";
import Header from "./Header";
import FilmList from "./FilmList";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

const moviesListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1.9em",
};

function Movies({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filmList = useMemo(
    () =>
      searchTerm.length
        ? movies.filter((film) =>
            film.l.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : movies,
    [movies, searchTerm]
  );

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <GenreSearch />
      <div>
        <div>
          <FilmList films={filmList} listStyle={moviesListStyle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
