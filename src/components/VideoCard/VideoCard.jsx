import "./VideoCard.css";

export function VideoCard({ video }) {
	console.log("video", video);
	return (
		<div className="VideoCard container-column">
			<div className="card-img-container">
				<img src={video.thumbnails.high.url} className="responsive-img" />
			</div>

			<div className="Videocard-description">
				<div className="description-details">
					<h3 style={{ wordBreak: "break-all" }}>
						{video.title.slice(0, 55)}...
					</h3>{" "}
					&nbsp;  &nbsp;
					<button className="btn-details">
						<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
					</button>
				</div>
				<div className="description-next">
					<p>{video.channelInfo.title}</p>
					<p>{video.statistics.likeCount} likes . upload date</p>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
