import React, {useState} from "react";
import ArticleList from "./ArticleList";
import ArticleWindow from "./ArticleWindow";

function NewsWindow({articles, featured, setMyArticles}){

  const [chosenArticle, setChosenArticle] = useState(null)
  
  function handleChooseArticle(article){
    setChosenArticle(article)
  }

  return(
    <div className = "news-window">
      <ArticleList articles={articles} handleChooseArticle={handleChooseArticle} setMyArticles={setMyArticles}/>
      <ArticleWindow 
        article={chosenArticle} 
        articles={articles} 
        setChosenArticle={setChosenArticle} 
        featured={featured}
      />
    </div>
   
  )
}

export default NewsWindow