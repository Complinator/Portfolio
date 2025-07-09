import "./Image.css";

function ImageWidget() {
    return (
        <div className="image-widget">
            <div className="image-container">
                <img 
                    src="./assets/Content/ProfilePicture.jpeg" 
                    alt="Profile" 
                    className="image-widget-circle" 
                />
                <div className="shine-overlay"></div>
            </div>
        </div>
    );
}

export default ImageWidget;