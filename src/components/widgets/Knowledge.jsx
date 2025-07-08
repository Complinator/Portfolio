import "./Knowledge.css";

function Knowledge({ svgPath, text }) {
    return (
        <div className="knowledge-icon-with-text">
            <div className="knowledge-icon-container">
                <img src={svgPath} alt="Icon" className="knowledge-icon-svg" />
            </div>
            <div className="knowledge-text-container">
                <span className="knowledge-icon-text">{text}</span>
            </div>
        </div>
    );
}

export default Knowledge;