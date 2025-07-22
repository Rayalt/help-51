import {StoreProviderProps} from "./typings";
import {Provider} from "react-redux";
import {createReduxStore} from "./../config/store-config";
import {StateSchema} from "app/providers/store-provider";
import {ReducersMapObject} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";

const StoreProvider = ({
	initialState,
	asyncReducers,
	children,
}: StoreProviderProps) => {
	// const navigate = useNavigate();
	
	const store = createReduxStore(
		initialState as StateSchema, 
		asyncReducers as ReducersMapObject<StateSchema>,
		// navigate,
	);

	return (
		<Provider store={ store }>
			{ children }
		</Provider>
	);
};

export { StoreProvider };