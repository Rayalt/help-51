import {StateSchema} from "app/providers/store-provider";
import {createSelector} from "@reduxjs/toolkit";
import {getScrollStop} from "../get-scroll-stop/get-scroll-stop";

export const getScrollPath = createSelector(
	getScrollStop,
	(state: StateSchema, path: string) => path,
	(scroll, path) => scroll[path] || 0,
)