import "./Image.css";

function ImageWidget() {
    return (
        <div className="image-widget">
            <img 
                src="./src/assets/Content/ProfilePicture.jpeg" 
                alt="Profile" 
                className="image-widget-circle" 
            />
        </div>
    );
}

export default ImageWidget;