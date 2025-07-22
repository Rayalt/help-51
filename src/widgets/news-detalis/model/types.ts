import {HTMLAttributes} from "react";
import {NewsType} from "shared/config/news";

export interface NewsDetailsProps extends HTMLAttributes<HTMLElement> {
	newsItem?: NewsType;
}