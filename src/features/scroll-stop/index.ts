import { getScrollPath } from "./model/selectors/get-scroll-path/get-scroll-path";
import { scrollStopActions, scrollStopReducer } from "./model/slice/scroll-stop-slice";
import {ScrollStopSchemaType} from "./model/types/scroll-stop-schema";

export { 
	ScrollStopSchemaType,
	getScrollPath,
	scrollStopActions,
	scrollStopReducer,
};