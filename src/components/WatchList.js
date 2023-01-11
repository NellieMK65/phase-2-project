import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FilmList from "./FilmList";

const watchListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1.9em",
};

function WatchList() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/w")
      .then((res) => res.json())
      .then((data) => {
        setWatchList(data);
      });
  }, []);

  return (
    <div>
      <Header noSearch={true} />
      <FilmList films={watchList} listStyle={watchListStyle} />
      <Footer />
    </div>
  );
}

export default WatchList;
