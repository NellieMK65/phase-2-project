import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import BingeContainer from './BingeContainer';
import MyArticles from './MyArticles';
import FollowTweets from './FollowTweets';
import VisitApi from './VisitApi';
import NavBar from './NavBar';
import Home from './Home';

function App() {
	const [articleList, setArticleList] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [myArticles, setMyArticles] = useState([]);
	const [featured, setFeatured] = useState();

	useEffect(() => {
		fetch(
			'https://newsapi.org/v2/top-headlines?country=us&apiKey=f54a02baacfc4187b26c3a5bee3f7774'
		)
			.then((r) => r.json())
			.then((data) => setArticleList(data.articles));
	}, []);

	useEffect(() => {
		const randomInt = function (min, max) {
			min = Math.ceil(0);
			max = Math.floor(19);
			return Math.floor(Math.random() * 19);
		};
		setFeatured(articleList[randomInt()]);
	}, [articleList]);

	const articlesToDisplay = articleList.filter((article) => {
		return article.title.toLowerCase().includes(searchTerm);
	});

	return (
		<div>
			<Header />
			<NavBar className="NavBar" />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route
					exact
					path="/bingecontainer"
					element={
						<BingeContainer
							articles={articlesToDisplay}
							setSearchTerm={setSearchTerm}
							setMyArticles={setMyArticles}
							featured={featured}
							setFeatured={setFeatured}
						/>
					}
				></Route>
				<Route
					exact
					path="/myarticles"
					element={
						<MyArticles
							myArticles={myArticles}
							setMyArticles={setMyArticles}
						/>
					}
				></Route>
				<Route path="/followtweets" element={<FollowTweets />}></Route>
				<Route exact path="/visitapi" element={<VisitApi />}></Route>
			</Routes>
		</div>
	);
}

export default App;
