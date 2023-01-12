import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({articles}){

 return (
   <div className = "NavBar">
     <NavLink to = "/bingecontainer" className = "link" articles={articles}>Binge</NavLink>
     <NavLink to = "/myarticles" className = "link">My Saved Articles</NavLink>
     <NavLink to = "/followtweets" className = "link">Follow API Tweets</NavLink>
     <NavLink to = "/visitapi" className = "link">Visit News API</NavLink>
   </div>
 )
}

export default NavBar