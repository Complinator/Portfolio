import "./TimelinePoint.css";

function TimelinePoint({ 
    title, 
    organization, 
    period, 
    description, 
    achievements = [],
    isActive
}) {
    return (
        <div className={`timeline-point ${isActive ? 'active' : ''}`}>
            <div className="timeline-content">
                <div className="timeline-header">
                    <h3 className="timeline-title">{title}</h3>
                    <div className="timeline-organization">{organization}</div>
                    <div className="timeline-period">{period}</div>
                </div>
                
                <div className="timeline-description">
                    {description}
                </div>
                
                {achievements.length > 0 && (
                    <div className="timeline-achievements">
                        <h4>Key Achievements:</h4>
                        <ul>
                            {achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TimelinePoint;