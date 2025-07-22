
import {Fragment} from "react";
import {NewsDetails} from "widgets";
import {useLocation, useParams} from "react-router-dom";
import {news} from "shared/config/news";

const NewsDetailsPage = () => {
	const { id } = useParams();
	const newsItem = news.find(item => item.id === id);
	return (
		<NewsDetails
			newsItem={ newsItem }
		></NewsDetails>
	);
};

export default NewsDetailsPage;