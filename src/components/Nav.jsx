import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">
                            Favorites
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
