import "./Navbar.css";

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <img src="/src/assets/Logos/Content/Portfolio.svg" alt="Logo" height="22px" />
                <div className="navbar-title">
                    <span>DevPortfolio</span>
                </div>
            </div>
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;