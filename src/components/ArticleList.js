import React from "react";
import Article from "./Article"

function ArticleList({articles, handleChooseArticle, setMyArticles}){

  const articleList = articles.map(article => <Article article={article} handleChooseArticle={handleChooseArticle} key={article.title}/>)

  return (
    <div className="article-list" >
      <header className = "sub-header">Choose an article below:</header>
      {articleList}
    </div>
  )
}
export default ArticleList