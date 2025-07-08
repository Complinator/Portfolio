import { useState } from "react";
import KnowledgePopup from "../views/parts/KnowledgePopup";
import "./Knowledge.css";

function Knowledge({ 
    svgPath, 
    text, 
    description = "", 
    keyTerms = [], 
    projects = [] 
}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <div className="knowledge-icon-with-text" onClick={handleClick}>
                <div className="knowledge-icon-container">
                    <img src={svgPath} alt="Icon" className="knowledge-icon-svg" />
                </div>
                <div className="knowledge-text-container">
                    <span className="knowledge-icon-text">{text}</span>
                </div>
            </div>
            
            <KnowledgePopup
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                title={text}
                description={description}
                svgPath={svgPath}
                keyTerms={keyTerms}
                projects={projects}
            />
        </>
    );
}

export default Knowledge;