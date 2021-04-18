import "./VideoDetails.css";
import { useData } from "../../contexts/data-context";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

export function VideoDetails() {
	const { videos, dispatch, playlists } = useData();

	let { id } = useParams();
	const video = videos.find((video) => video.id === id);
	console.log(id, video);
	// const id = "jD8n2CKEWtA";
	const url = `https://www.youtube.com/watch?v=${id}`;

	const toggleInPlaylists = (playlistId) => {
		dispatch({
			type: "TOGGLE_IN_PLAYLISTS",
			payload: { videoId: id, playlistId: playlistId },
		});
	};
	console.log(playlists);

	return (
		<div className="VideoDetails">
			<div className=" v-details-container container-column">
				<div
					className="wrapper"
					// style={{ position: "relative", paddingTop: "56.25%" }}
				>
					<ReactPlayer
						// style={{ position: "absolute", top: "0", left: "0" }}
						url={url}
						width="100%"
						height="100%"
						autoplay={true}
						stopOnUnmount={false}
						config={{ youtube: { playerVars: { controls: 1, loop: 1 } } }}
					/>
				</div>
				<div
					className="v-details-container"
					style={{ backgroundColor: "white" }}
				>
					<h3>{video.title}</h3>
					<div className="reaction-bar">
						<div
							className="avatar-badge-container reaction-bar-item"
							role="button"
						>
							<div
								className="avatar-noborder container-center"
								style={{ width: "2rem", height: "2rem" }}
							>
								<img
									src={video.channelInfo.thumbnails.default.url}
									alt="image"
									class="avatar-img"
								/>
							</div>
						</div>
						<div className="container-column" role="button">
							<h5>{video.channelInfo.title}</h5>
						</div>
						<div
							className="avatar-badge-container reaction-bar-item"
							role="button"
						>
							<div
								className="avatar-noborder container-center"
								onClick={() => {
									toggleInPlaylists("likedVideos");
								}}
							>
								<i className="fa fa-thumbs-up" role="button"></i>
								<br />
								<small>{video.statistics.likeCount}likes</small>
							</div>
						</div>
						<div
							className="avatar-badge-container reaction-bar-item"
							role="button"
						>
							<div className="avatar-noborder container-center">
								<i className="fa fa-clock-o" aria-hidden="true"></i>
								<br />
								<small>Watch_Later</small>
							</div>
						</div>
						<div
							className="avatar-badge-container reaction-bar-item"
							role="button"
						>
							<div className="avatar-noborder container-center">
								<div className="add-to-playlist-menu"></div>
								<i className="fa fa-plus-square" aria-hidden="true"></i>
								<br />
								<small>Add To</small>
							</div>
						</div>
					</div>
				</div>
				<div className="v-description-container">{video.description}</div>
			</div>

			<div className="v-suggestion-container"></div>
		</div>
	);
}

export default VideoDetails;
