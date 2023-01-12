import React from 'react';

function SaveArticle({ article }) {
	function handleSave() {
		const articleData = {
			title: article.title,
			source: article.source.name,
			author: article.author,
			url: article.url,
		};

		fetch('http://localhost:3001/articles', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(articleData),
		});
	}

	return <button onClick={handleSave}>Save this article</button>;
}
export default SaveArticle;
