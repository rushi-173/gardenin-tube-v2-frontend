
import { Link } from "react-router-dom";

export function Menu(){
    return(
        <>
            <li className="menu-item">
                <b>
                    <Link to="/">Home</Link>
                </b>
            </li>
            <li className="menu-item">
                <b>
                    <Link to="/" className="link-to">
                        Playlists
                    </Link>
                </b>
            </li>
            {/* <li className="menu-item">
                <Link to="/products">Fruit Plants</Link>
            </li> */}
            <li className="menu-item">
                <b>
                    <Link to="/">Liked Videos</Link>
                </b>
            </li>
            <li className="menu-item">
                <b>
                    <Link to="/">Watch Later</Link>
                </b>
            </li>
            <li className="menu-item">
                <b>
                    <Link to="/">History</Link>
                </b>
            </li>
            <li className="menu-item">
                <b>
                    <Link to="/">Account</Link>
                </b>
            </li>
            <li className="menu-item">
                <b>
                    <Link to="/">Settings</Link>
                </b>
            </li>
        </>
    )
}