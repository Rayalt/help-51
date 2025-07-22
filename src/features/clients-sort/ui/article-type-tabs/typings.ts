import { HTMLProps } from 'react';
// import {ArticleTags} from "entities/article";

export interface ArticleTypeTabsProps extends HTMLProps<HTMLElement> {
	// value: ArticleTags;
	value: any;
	// onChangeType: (type: ArticleTags) => void;
	onChangeType: (type: any) => void;
}