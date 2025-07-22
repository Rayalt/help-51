import {StateSchema} from "app/providers/store-provider";

export const getScrollStop = (state: StateSchema) => state.scrollStop.scroll;