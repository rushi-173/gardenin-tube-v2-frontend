import {
	createContext,
	useContext,
	useState,
	useEffect,
	useReducer,
} from "react";

import { initialState, reducerFunc } from "../store/data-reducer";

const DataContext = createContext();

export function DataProvider({ children }) {
	const [state, dispatch] = useReducer(reducerFunc, initialState);

	return (
		<DataContext.Provider value={{ videos: state.videos, dispatch, playlists: state.playlists }}>
			{children}
		</DataContext.Provider>
	);
}

export const useData = () => useContext(DataContext);
