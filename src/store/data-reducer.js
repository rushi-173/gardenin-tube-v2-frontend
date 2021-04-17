import { v4 as uuid } from "uuid";

export const reducerFunc = (state, { type, payload }) => {
	console.log("callink", payload);
	switch (type) {
		case "INITIALIZE_VIDEOS":
			return { ...state, videos: payload };
		case "ADD_TO_VIDEOS":
			return { ...state, videos: [...state.videos, payload] };
    }

};

export const initialState = {
	videos: [],
	playlists: [
		{
			name: "Liked videos",
			id: uuid(),
			videos: [],
            isDefault : true
		},
		{
			name: "Saved videos",
			id: uuid(),
			videos: [],
            isDefault : true
		},
		{
			name: "Watch Later videos",
			id: uuid(),
			videos: [],
            isDefault : true
		},
	],
};

