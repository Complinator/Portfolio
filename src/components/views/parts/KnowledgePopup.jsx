import { useEffect } from "react";
import Badge from "../../widgets/Badge";
import "./KnowledgePopup.css";

function KnowledgePopup({ 
    isOpen, 
    onClose, 
    title, 
    description, 
    svgPath, 
    keyTerms = [], 
    projects = [] 
}) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <div className="popup-icon-section">
                    <div className="popup-icon">
                        <img src={svgPath} alt={title} className="popup-icon-svg" />
                    </div>
                </div>
                
                <div className="popup-content">
                    <button className="popup-close" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                    
                    <div className="popup-header">
                        <h2 className="popup-title">{title}</h2>
                        <p className="popup-description">{description}</p>
                    </div>
                    
                    {keyTerms.length > 0 && (
                        <div className="popup-section">
                            <h3 className="popup-section-title">Key Technologies & Concepts Known</h3>
                            <div className="popup-badges">
                                {keyTerms.map((term, index) => (
                                    <Badge key={index} text={term} />
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {projects.length > 0 && (
                        <div className="popup-section">
                            <h3 className="popup-section-title">Projects Using This Technology</h3>
                            <div className="popup-projects">
                                {projects.map((project, index) => (
                                    <div key={index} className="popup-project">
                                        <h4 className="project-name">{project.name}</h4>
                                        <p className="project-description">{project.description}</p>
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                View Project →
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default KnowledgePopup;