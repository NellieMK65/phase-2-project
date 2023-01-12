import React, { useState } from "react"

function Article({article, handleChooseArticle}){
  const [read, setRead] = useState(false)
  function handleClick(){
    handleChooseArticle(article)
    setRead(!read)
  }

  return (
    <div className={read ? "read-article" : "article"} onClick={handleClick}>
      <h4 className="article-title">{article.title}</h4>
      <img src={article.urlToImage} alt="No image available" className="thumbnail"/>
      <h5>{article.author ? article.author : "Staff"}, <em>{article.source.name}</em></h5>
      <h6>{article.publishedAt}</h6>
      <div className="mark-unread"><em>{read ? "Click article to mark unread" : ""}</em></div>

      
    </div>
  )
}

export default Article