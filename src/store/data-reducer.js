import { v4 as uuid } from "uuid";

const addToPlaylist = (state, videoId, playlistId) => {
	console.log("adding", playlistId, videoId);
	return {
		...state,
		playlists: state.playlists.map((playlistItem) => {
			return playlistItem.id === playlistId
				? {
						...playlistItem,
						videos: [...playlistItem.videos, videoId],
				  }
				: playlistItem;
		}),
	};
};

const removeFromPlaylist = (state, videoId, playlistId) => {
	console.log("deleting", playlistId, videoId);
	return {
		...state,
		playlists: state.playlists.map((playlistItem) => {
			return playlistItem.id === playlistId
				? {
						...playlistItem,
						videos: playlistItem.videos.filter(
							(videoItem) => videoItem !== videoId
						),
				  }
				: playlistItem;
		}),
	};
};

export const reducerFunc = (state, { type, payload }) => {
	console.log("callink", payload);

	switch (type) {
		case "INITIALIZE_VIDEOS":
			return { ...state, videos: payload };
		case "ADD_TO_VIDEOS":
			return { ...state, videos: [...state.videos, payload] };
		case "TOGGLE_IN_PLAYLISTS":
			const currentPlaylist = state.playlists.find(
				(playlistItem) => playlistItem.id === payload.playlistId
			);
			const isInPlaylist = currentPlaylist.videos.find(
				(videoItem) => videoItem === payload.videoId
			);
			return isInPlaylist
				? removeFromPlaylist(state, payload.videoId, payload.playlistId)
				: addToPlaylist(state, payload.videoId, payload.playlistId);
		default:
			return state;
	}
};

export const initialState = {
	videos: [],
	playlists: [
		{
			name: "Liked videos",
			id: "likedVideos",
			videos: [],
			isDefault: true,
		},
		{
			name: "Saved videos",
			id: "savedVideo",
			videos: [],
			isDefault: true,
		},
		{
			name: "Watch Later videos",
			id: "watchLaterVideos",
			videos: [],
			isDefault: true,
		},
	],
};
