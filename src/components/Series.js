import React, { useMemo, useState } from "react";
import Header from "./Header";
import FilmList from "./FilmList";
import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

const seriesListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1.9em",
};

function Series({ series }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filmList = useMemo(
    () =>
      searchTerm.length
        ? series.filter((film) =>
            film.l.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : series,
    [series, searchTerm]
  );
  return (
    <div>
      <Header setSearchTerm={setSearchTerm} /> <GenreSearch />
      <div>
        <div>
          <FilmList films={filmList} listStyle={seriesListStyle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Series;
