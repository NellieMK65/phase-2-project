import React, { useMemo, useState } from "react";
import Header from "./Header";
import FilmList from "./FilmList";

import Footer from "./Footer";
import GenreSearch from "./GenreSearch";

const documentariesListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1.9em",
};

function Documentaries({ documentaries }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filmList = useMemo(
    () =>
      searchTerm.length
        ? documentaries.filter((film) =>
            film.l.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : documentaries,
    [documentaries, searchTerm]
  );
  return (
    <div>
      <Header setSearchTerm={setSearchTerm} /> 
      <GenreSearch />
      <div>
        <div>
          <FilmList films={filmList} listStyle={documentariesListStyle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Documentaries;
