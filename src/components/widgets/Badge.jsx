import "./Badge.css";

function Badge({ text }) {
    return (
        <div className="badge">
            <span className="badge-text">{text}</span>
        </div>
    );
}

export default Badge;