import React, { useEffect } from "react";
import SaveArticle from "./SaveArticle";

function FeaturedArticle({featured}){

  if (featured === null){
    return (
      <div>Loading...</div>
    )
  } else if (featured === undefined){
      return (
        <div>Loading...</div>
      )
    } else {
    return (
      <div className="feature-box">
        
          <header className="sub-header"><em>Featured Article:</em></header>
          <h3 className = "title">{featured.title}</h3>
          <h4 className = "source"><em>{featured.source.name}</em></h4>
          <h5 className = "author">{featured.author ? featured.author : "Staff"}</h5>
          <h6>{featured.publishedAt}</h6>
          <h6 className = "description">{featured.description}</h6>
          <img src = {featured.urlToImage} className="feature-image" alt = "No image available"/>
          <h6><em>For more, visit:</em> <a href={featured.url} target = "_blank">{featured.source.name}</a></h6>
          <SaveArticle article = {featured}/>
      </div>
      )
    }
  }

  

export default FeaturedArticle