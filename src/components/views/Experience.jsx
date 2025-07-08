import Timeline from "./parts/Timeline";
import "./Views.css";

function Experience() {
    const experiences = [
        {
            id: "high-school",
            title: "High School Graduate",
            organization: "Saint Patrick's School",
            period: "2015 - 2018",
            description: "Completed secondary education with focus on science and mathematics. Developed foundational analytical and problem-solving skills that would later support my engineering studies.",
            achievements: [
                "Mathematics Excellence Award",
                "Science Fair First Place",
                "Student Council Member"
            ],
            svgPath: "./src/assets/Logos/Content/Study.svg"
        },
        {
            id: "civil-engineering",
            title: "Civil Engineering Student",
            organization: "University of Chile",
            period: "2019 - 2021",
            description: "Studied civil engineering fundamentals including structural analysis, project management, and mathematical modeling. This experience provided a strong analytical foundation and systematic problem-solving approach.",
            achievements: [
                "Dean's List for Academic Excellence",
                "Structural Design Competition Finalist",
                "Research Assistant in Construction Materials"
            ],
            svgPath: "./src/assets/Logos/Content/Bag.svg"
        },
        {
            id: "computer-science",
            title: "Computer Science Engineering",
            organization: "University of Chile",
            period: "2021 - Present",
            description: "Pursuing Computer Science Engineering with specialization in Artificial Intelligence. Currently focused on machine learning, software development, and cybersecurity applications.",
            achievements: [
                "AI Research Project Leader",
                "Full-Stack Development Certification",
                "Cybersecurity Workshop Completion",
                "Open Source Contributor"
            ],
            svgPath: "./src/assets/Logos/Content/Bag.svg"
        },
        {
            id: "freelance-dev",
            title: "Freelance Developer",
            organization: "Self-Employed",
            period: "2022 - Present",
            description: "Working as a freelance full-stack developer and AI consultant. Building web applications, automation solutions, and machine learning models for various clients across different industries.",
            achievements: [
                "15+ Successful Project Deliveries",
                "5-Star Client Rating Average",
                "AI Automation Solutions Specialist",
                "Cross-Platform Application Developer"
            ],
            svgPath: "./src/assets/Logos/Content/Bag.svg"
        },
        {
            id: "research-assistant",
            title: "Research Assistant",
            organization: "AI Lab - University of Chile",
            period: "2023 - Present",
            description: "Research assistant in the Artificial Intelligence laboratory, focusing on computer vision and natural language processing. Contributing to cutting-edge research in machine learning applications.",
            achievements: [
                "Co-author of 2 Research Papers",
                "Computer Vision Model Development",
                "Conference Presentation Speaker",
                "Graduate Research Grant Recipient"
            ],
            svgPath: "./src/assets/Logos/Content/Research.svg"
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