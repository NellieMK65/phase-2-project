import React from 'react';

function MyArticle({ article, myArticles, setMyArticles }) {
	function handleRemove() {
		fetch(`http://localhost:3001/articles/${article.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const updatedArticles = myArticles.filter(
			(art) => art.id !== article.id
		);
		setMyArticles(updatedArticles);
	}

	return (
		<div className="my-article-box">
			<h4 className="my-article-title">{article.title}</h4>
			<h5>
				{article.author ? article.author : 'Staff'},{' '}
				<em>{article.source}</em> |{' '}
				<a href={article.url} alt="article link" target="_blank">
					Click to visit.
				</a>
			</h5>
			<button onClick={handleRemove} id={article.id}>
				Remove article from my list.
			</button>
		</div>
	);
}

export default MyArticle;
