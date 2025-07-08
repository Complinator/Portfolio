import { useState, useEffect, useRef } from "react";
import TimelinePoint from "./TimelinePoint";
import "./Timeline.css";

function Timeline({ experiences }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            
            const container = containerRef.current;
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
            
            setScrollProgress(progress);
            
            // Calculate which point should be active based on scroll
            const sectionHeight = scrollHeight / experiences.length;
            const currentSection = Math.floor(scrollTop / sectionHeight);
            const clampedIndex = Math.min(Math.max(currentSection, 0), experiences.length - 1);
            setActiveIndex(clampedIndex);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial call
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [experiences.length]);

    const handlePointClick = (id) => {
        const index = experiences.findIndex(exp => exp.id === id);
        if (index !== -1 && containerRef.current) {
            setActiveIndex(index);
            
            const container = containerRef.current;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            const targetScroll = (index / (experiences.length - 1)) * scrollHeight;
            
            container.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="timeline-container">
            <div className="timeline-progress">
                <div className="timeline-track">
                    <div 
                        className="timeline-progress-bar"
                        style={{ height: `${scrollProgress * 100}%` }}
                    />
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-nav-point ${index === activeIndex ? 'active' : ''}`}
                            style={{ top: `${(index / (experiences.length - 1)) * 100}%` }}
                            onClick={() => handlePointClick(exp.id)}
                        >
                            <img src={exp.svgPath} alt={exp.title} className="timeline-nav-icon" />
                            <div className="nav-point-tooltip">{exp.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="timeline-content" ref={containerRef}>
                {experiences.map((experience, index) => (
                    <div
                        key={experience.id}
                        className={`timeline-point-wrapper ${index === activeIndex ? 'active' : ''}`}
                    >
                        <TimelinePoint
                            {...experience}
                            isActive={index === activeIndex}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;