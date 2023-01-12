import React from "react"; 

function Search({setSearchTerm}){
  function handleSearchChange(e){
    setSearchTerm(e.target.value.toLowerCase())
  }
  return (
    <div>
      <form className = "search-form">
      <input type = "search" className="search" placeholder = "Search by term..." onChange={handleSearchChange}></input>
      </form>
     
    </div>
  )
}
export default Search