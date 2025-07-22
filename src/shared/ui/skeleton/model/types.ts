import {HTMLProps} from "react";

export interface SkeletonProps extends HTMLProps<HTMLElement> {
	w?: number | string;
	s?: number | string;
	h?: number | string;
	brs?: number | string;
}