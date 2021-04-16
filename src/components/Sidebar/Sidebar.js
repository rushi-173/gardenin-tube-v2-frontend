import "./Sidebar.css";
import {SidebarItem} from "./SidebarItem";

export function Sidebar() {
	return (
		<div className="container-column sidebar">
			<SidebarItem path="/">
				<i class="fa fa-home" aria-hidden="true"></i>
				<small>Home</small>
			</SidebarItem>
			<SidebarItem path="/">
				<i class="fa fa-compass" aria-hidden="true"></i>
				<small>Explore</small>
			</SidebarItem>
			<SidebarItem path="/">
				<i class="fa fa-indent" aria-hidden="true"></i>
				<small>Playlists</small>
			</SidebarItem>
			<SidebarItem path="/">
				<i class="fa fa-history" aria-hidden="true"></i>
				<small>History</small>
			</SidebarItem>
			<SidebarItem path="/">
				<i class="fa fa-clock-o" aria-hidden="true"></i>
				<small>Watch_Later</small>
			</SidebarItem>
			<SidebarItem path="/">
				<i class="fa fa-thumbs-up" aria-hidden="true"></i>
				<small>Liked_Videos</small>
			</SidebarItem>
		</div>
	);
}

export default Sidebar;
