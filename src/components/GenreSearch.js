import React from "react";

const genreStyle = {
  display: "flex",
  justifyContent: "right",
};

const input = {
  background: "rgba(255, 255, 255, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  color: "#D9D9D9",
  margin: "2px",
  padding: "5px",
  marginBottom: "30px",
  fontSize: "15px",
  width: " 20%",
};

const options = {
  background: "rgba(255, 255, 255, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  color: "black",
  fontSize: "15px",
};

function GenreSearch() {

  return (
    <div style={genreStyle}>
      <select name="genre" id="genre" style={input}>
        <option value="" style={options}></option>
        <option value="action" style={options}>
          Action
        </option>
        <option value="comedy" style={options}>
          Comedy
        </option>
        <option value="drama" style={options}>
          Drama
        </option>
        <option value="fantasy" style={options}>
          Fantasy
        </option>
        <option value="horror" style={options}>
          Horror
        </option>
        <option value="thriller" style={options}>
          Thriller
        </option>
      </select>
    </div>
  );
}

export default GenreSearch;
