import React, { useMemo, useState } from "react";
import FilmList from "./FilmList";
import Header from "./Header";
import Footer from "./Footer";

const homePageColumns = {
  display: "flex",
  justifyContent: "space-between",
};

const filmListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "2em",
};

function Home({ films }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filmList = useMemo(
    () =>
      searchTerm.length
        ? films.filter((film) =>
            film.l.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : films,
    [films, searchTerm]
  );

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <div style={homePageColumns}>
        <div>
          <FilmList films={filmList} listStyle={filmListStyle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
