import {HTMLProps} from "react";

export interface InfiniteScrollWrapperProps extends HTMLProps<HTMLElement> {
	onScrollEnd?: () => void;
}