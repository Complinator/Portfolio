import "./Views.css";
import "./About.css";
import ImageWidget from "../widgets/Image";
import Knowledge from "../widgets/Knowledge";

function About() {
    return(
        <div className="about">
            <div className="about-header">
                <div className="about-image">
                    <ImageWidget />
                </div>
                <div className="subtitle about-name">
                    Benjamín Saldivia F.
                </div>
                <div className="smooth-text about-subtitle">
                    <strong>Computer Science Engineer | AI Developer with Full-Stack & Cloud Proficiency</strong> <br />
                    Computer science engineer currently focused on artificial intelligence development, with a strong foundation in general software engineering. Experienced in full-stack development, cloud infrastructure, and cross-domain technologies. Passionate about building intelligent, scalable, and impactful solutions.
                </div>
            </div>
            <div className="about-content">
                <div className="subtitle">
                    Featured Projects
                </div>
                <div className="subtitle">
                    About Me
                </div>
                <div className="text">
                Postgraduate student in Computer Science with a diverse academic background in both civil engineering and software development. Passionate about emerging technologies, currently focused on artificial intelligence, application development, and cybersecurity. My training journey has also extended into electronics, mechanics, and robotics—allowing me to approach problems with a multidisciplinary mindset. Continuously exploring the intersection of software, hardware, and innovation to build smart, scalable, and real-world solutions.
                </div>
                <div className="subtitle">
                    Knowledge
                </div>
                <div className="about-knowledge">
                    <div className="about-knowledge-row">
                        <Knowledge svgPath="./src/assets/Logos/Content/Code.svg" text="Programming Languages" />
                        <Knowledge svgPath="./src/assets/Logos/Content/Database.svg" text="Databases" />
                        <Knowledge svgPath="./src/assets/Logos/Content/Version.svg" text="Version Control" />
                        <Knowledge svgPath="./src/assets/Logos/Content/Cloud.svg" text="Cloud Services" />
                        <Knowledge svgPath="./src/assets/Logos/Content/Platform.svg" text="Cloud Platforms" />
                        <Knowledge svgPath="./src/assets/Logos/Content/MachineLearning.svg" text="Machine Learning" />
                    </div>
                    <div className="about-knowledge-row">
                        <Knowledge svgPath="./src/assets/Logos/Content/Framework.svg" text="Frameworks" />
                        <Knowledge svgPath="./src/assets/Logos/Content/Container.svg" text="Containerization" />
                        <Knowledge svgPath="./src/assets/Logos/Content/AI.svg" text="Artificial Inteligence" />
                        <Knowledge svgPath="./src/assets/Logos/Content/Cybersecurity.svg" text="Cybersecurity" />
                        <Knowledge svgPath="./src/assets/Logos/Content/OS.svg" text="OS management" />
                        <Knowledge svgPath="./src/assets/Logos/Content/Platform.svg" text="Backend Development" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;