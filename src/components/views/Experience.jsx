import Timeline from "./parts/Timeline";
import "./Views.css";

function Experience() {
    const experiences = [
        {
            id: "high-school",
            title: "Primary and secondary education",
            organization: "Sagrados Corazones School, Viña del mar, Chile",
            period: "2007 - 2020",
            description: "Completed primary and secondary education with focus on science and mathematics. Developed foundational analytical and problem-solving skills that would later support my engineering studies.",
            achievements: [
                "\"Padre Damián\" Award (2020)",
                "Academic Excellence Award (2018-2020)",
                "High Score in University Entrance Exam (PTU)"
            ],
            svgPath: "./assets/Logos/Content/Study.svg"
        },
        {
            id: "computer-science",
            title: "Bachelor’s and Master’s Degree in Computer Engineering",
            organization: "Adolfo Ibañez University, Viña del Mar, Chile",
            period: "2020 - Present",
            description: "Pursuing Computer Science Engineering with specialization in Artificial Intelligence. Currently focused on computer vision, software development, and cybersecurity applications.",
            achievements: [
                "Merit-Based Scholarship (2021-2025)",
                "Badge of honor (2021-2025)",
                "Pedro Luis González Weighted Score Scholarship (2020-2025)"
            ],
            svgPath: "./assets/Logos/Content/Study.svg"
        },
        {
            id: "teaching-assistant",
            title: "Teaching assistant",
            organization: "Adolfo Ibañez University, Viña del Mar, Chile",
            period: "2022 - 2023",
            description: "Supported students and instructors in an introductory Python course, assisting with coding exercises, clarifying concepts, and promoting a collaborative learning environment.",
            achievements: [
                "Supported instructors during lectures and lab sessions",
                "Assisted students in understanding programming concepts, debugging code, and completing assignments",
                "Helped foster a collaborative and engaging learning environment",
                "Worked both via in-person and online platforms"
            ],
            svgPath: "./assets/Logos/Content/Bag.svg"
        },
        {
            id: "research-assistant",
            title: "Research assistant",
            organization: "Adolfo Ibañez University, Viña del Mar, Chile",
            period: "2022",
            description: "Research assistant focused on the operation and implementation of AI in Machine Vision, specifically the YOLO algorithm. Directed remote by Miguel Carrasco (PhD in Computer Science).",
            achievements: [
                "Developed software tools under supervision to support port operations and internal processes",
                "Gained hands-on experience working within a real-world software development team",
                "Observed and participated in the company’s general workflow, enhancing understanding of IT in a logistics and infrastructure context"
            ],
            svgPath: "./assets/Logos/Content/Research.svg"
        },
        {
            id: "internship",
            title: "Internship at TPV (Valparaíso Port Terminal)",
            organization: "Valparaíso Port Terminal, Valparaíso, Chile",
            period: "2023",
            description: "Research assistant in the Artificial Intelligence laboratory, focusing on computer vision and natural language processing. Contributing to cutting-edge research in machine learning applications.",
            achievements: [
                "Developed software tools under supervision to support port operations and internal processes",
                "Gained hands-on experience working within a real-world software development team",
                "Observed and participated in the company’s general workflow, enhancing understanding of IT in a logistics and infrastructure context"
            ],
            svgPath: "./assets/Logos/Content/Bag.svg"
        },
        {
            id: "research-assistan2t",
            title: "Internship at TPV (Valparaíso Port Terminal)",
            organization: "Valparaíso Port Terminal, Valparaíso, Chile",
            period: "2023",
            description: "Research assistant in the Artificial Intelligence laboratory, focusing on computer vision and natural language processing. Contributing to cutting-edge research in machine learning applications.",
            achievements: [
                "Co-author of 2 Research Papers",
                "Computer Vision Model Development",
                "Conference Presentation Speaker",
                "Graduate Research Grant Recipient"
            ],
            svgPath: "./assets/Logos/Content/Bag.svg"
        },
        {
            id: "research-assistan5t",
            title: "Internship at TPV (Valparaíso Port Terminal)",
            organization: "Valparaíso Port Terminal, Valparaíso, Chile",
            period: "2023",
            description: "Research assistant in the Artificial Intelligence laboratory, focusing on computer vision and natural language processing. Contributing to cutting-edge research in machine learning applications.",
            achievements: [
                "Co-author of 2 Research Papers",
                "Computer Vision Model Development",
                "Conference Presentation Speaker",
                "Graduate Research Grant Recipient"
            ],
            svgPath: "./assets/Logos/Content/Bag.svg"
        }
    ];

    return (
        <div className="experience">
            <span className="title">Experience</span>
            <Timeline experiences={experiences} />
        </div>
    );
}

export default Experience;