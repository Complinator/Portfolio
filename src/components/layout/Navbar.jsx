import ImageWidget from "../widgets/Image";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-logo">
                        <img src="/src/assets/Logos/Content/Portfolio.svg" alt="Logo" height="22px" />
                        <div className="navbar-title">
                            <span>DevPortfolio</span>
                        </div>
                </Link>
                <div className="navbar-links">
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/awards">Awards</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </div>
            <Link to="/about" className="navbar-image">
                <ImageWidget />
            </Link>
        </div>
    );
}

export default Navbar;