import {Link} from "react-router-dom";

export function SidebarItem({ children, path }) {
	return (
		<Link to={path} className="container">
			<div class="avatar-badge-container sidebar-item" role="button">
				<div class="avatar-noborder container-center">{children}</div>
			</div>
		</Link>
	);
}