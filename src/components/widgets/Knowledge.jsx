import "./Knowledge.css";

function Knowledge({ svgPath, text }) {
    return (
        <div className="icon-with-text">
            <div className="icon-container">
                <img src={svgPath} alt="Icon" className="icon-svg" />
            </div>
            <div className="text-container">
                <span className="icon-text">{text}</span>
            </div>
        </div>
    );
}

export default Knowledge;