
import { Link } from "react-router-dom";

export function MainNavItems() {
	return (
		<div className="container-center">
			<Link to="/" className="nav-icon-label-container">
				<div className="avatar-badge-container" role="button">
					<div
						className="avatar-noborder container-center"
						style={{
							fontSize: "0.8rem",
							width: "1.5rem",
							margin: "0rem 0.5rem",
						}}
					>
						<i className="fa fa-bell" aria-hidden="true"></i>
					</div>
					<div
						className="icon-badge-top container-center"
						style={{ right: "0.2rem" }}
					>
						<span>1</span>
					</div>
				</div>
			</Link>

			<div className="avatar" style={{ margin: "0rem 0.3rem", width: "2.5rem", height: "2.5rem" }}>
				<img
					src="https://pbs.twimg.com/profile_images/1140513211403210752/MStpsmSO_400x400.jpg"
					alt="profile"
					className="avatar-img"
				/>
			</div>
		</div>
	);
}
