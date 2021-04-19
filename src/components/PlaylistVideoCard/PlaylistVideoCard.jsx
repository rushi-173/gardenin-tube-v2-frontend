import "./PlaylistVideoCard.css";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/data-context";
import { useState } from "react";

export function PlaylistVideoCard({ video, pid }) {
	const { dispatch } = useData();
	const [showModal, setShowModal] = useState("none");
	console.log("video", video);
	const toggleInPlaylists = (playlistId) => {
		dispatch({
			type: "TOGGLE_IN_PLAYLISTS",
			payload: { videoId: video.id, playlistId: playlistId },
		});
	};
	return (
		<div className="PlaylistVideoCard container-between">
			<div className="card-img-container">
				<Link to={`/videos/${video.id}`}>
					<img src={video.thumbnails.high.url} className="responsive-img" />
				</Link>
			</div>

			<div className="PlaylistVideoCard-description">
				<div className="description-details">
					<h3 style={{ wordBreak: "break-all" }}>
						{video.title.slice(0, 55)}...
					</h3>{" "}
					&nbsp; &nbsp;
					<button
						className="btn-details"
						onClick={() => {
							setShowModal((prev)=>prev==="none"?"flex":"none");
						}}
					>
						<i
							className="fa fa-trash"
							style={{
								color: "#b91c1c",
							}}
						></i>
					</button>
				</div>
				<div className="description-next">
					<p>{video.channelInfo.title}</p>
					<p>{video.statistics.likeCount} likes . upload date</p>
				</div>
			</div>
			<div
				className="modal"
				id="modal"
				style={{ display: showModal }}
			>
                <div className="modal-content">
					<div className="modal-title">
						<h2>Delete from Playlist</h2>

					</div>
					<div className="modal-description">
						<p>Do you really want to delete this item</p>
						
					</div>
					<div className="modal-btn-container">
						<button className="btn btn-primary" onClick={() => {
							setShowModal((prev)=>prev==="none"?"flex":"none");
						}}>Close</button>
						<button className="btn btn-danger" onClick={() => {
							toggleInPlaylists(pid);
							setShowModal((prev)=>prev==="none"?"flex":"none")
						}}>Delete</button>

					</div>                    
                </div>
            </div>
		</div>
	);
}

export default PlaylistVideoCard;
