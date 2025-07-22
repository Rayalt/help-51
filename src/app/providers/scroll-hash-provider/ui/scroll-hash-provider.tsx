import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const ScrollHashProvider = () => {
	const { hash } = useLocation();
		
	useEffect(() => {
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [hash]);
	
	return null;
};

export { ScrollHashProvider };