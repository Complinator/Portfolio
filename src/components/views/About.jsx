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
                        <Knowledge 
                            svgPath="./assets/Logos/Content/Code.svg" 
                            text="Programming Languages" 
                            description="Proficient in multiple programming languages for various applications including web development, data science, and system programming."
                            keyTerms={["JavaScript", "Python", "Java", "C++", "TypeScript", "C", "R", "Go", "SQL", "Dart", "Lua"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/Database.svg" 
                            text="Databases"
                            description="Proficient in a wide range of databases for applications including web development, data analytics, cloud infrastructure, embedded systems, and real-time applications. Experienced with relational, NoSQL, and cloud-native solutions, optimizing both performance and scalability."
                            keyTerms={["PostgreSQL", "MySQL", "SQLite", "Microsoft SQL Server", "Oracle Database", "MongoDB", "MongoDB Atlas", "Neo4j", "SQL", "NoSQL", "Supabase", "BigQuery", "Firestore", "Cloud SQL"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/Version.svg" 
                            text="Version Control"
                            description="Proficient in version control systems for managing codebases, enabling team collaboration, and maintaining project history. Experienced with distributed and centralized systems, branch management, conflict resolution, and integrating version control into modern DevOps workflows."
                            keyTerms={["Git", "Github", "Bitbucket", "Git CLI", "Gitlab", "Github Actions", "Github Copilot", "GitHub Pages"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]}  
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/Cloud.svg" 
                            text="Cloud Services" 
                            description="Experienced with a wide range of cloud services for computing, storage, networking, databases, and serverless functions. Skilled in leveraging cloud-based tools to build scalable, resilient, and secure applications across diverse environments."
                            keyTerms={["IaaS", "FaaS", "SaaS", "Containers", "Kubernetes", "Storage", "Database Engines", "Networking", "CDN Services", "Security", "Serverless", "Monitoring"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/Platform.svg" 
                            text="Cloud Platforms" 
                            description="Experienced in deploying, managing, and integrating applications across major cloud platforms including AWS, Azure, and Google Cloud. Skilled in leveraging platform-specific services for compute, storage, networking, and DevOps to build scalable and resilient cloud-native solutions."
                            keyTerms={["GCP", "AWS", "Azure", "Heroku", "Linode", "Vercel", "Firebase", "Railway"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/MachineLearning.svg" 
                            text="Machine Learning" 
                            description="Proficient in machine learning with experience in supervised and unsupervised learning, model deployment, data preprocessing, and real-world applications using popular libraries and tools. Skilled in building scalable, interpretable, and production-ready ML pipelines across cloud and on-prem environments."
                            keyTerms={["Scikit-learn", "XGBoost", "Google Colab", "Jupyter Notebooks", "Regression", "Classification", "Clustering", "Ensemble Models", "Dimensionality Reduction"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/RunEnv.svg" 
                            text="WebApp Development" 
                            description="Skilled in full-stack web application development, from responsive front-end interfaces to robust back-end APIs and scalable deployment. Proficient with modern frameworks, design systems, databases, and DevOps workflows to deliver performant, user-friendly web experiences."
                            keyTerms={["HTML", "CSS", "Javascript", "Typescript", "React", "Vite", "Next.js", "Node.js", "NPM", "Responsiveness", "MUI", "Tailwind", "Bootstrap"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                    </div>
                    <div className="about-knowledge-row">
                        <Knowledge 
                            svgPath="./assets/Logos/Content/Framework.svg" 
                            text="Frameworks" 
                            description="Experienced in leveraging a wide range of frameworks to accelerate software development across domains including web, backend, mobile, data science, and machine learning. Skilled in selecting and applying the appropriate framework based on project architecture, scalability, and performance requirements."
                            keyTerms={["React", "Next.js", "Express", "NestJS", "Django", "Flask", "Flutter", "Electron", "Tkinter", "Hugo"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/Container.svg" 
                            text="Containerization" 
                            description="Proficient in containerization technologies for building, packaging, and deploying isolated and reproducible environments. Skilled in Docker, container orchestration with Kubernetes, and leveraging container registries, CI/CD pipelines, and infrastructure-as-code to enable scalable and efficient application delivery."
                            keyTerms={["Docker", "Docker CLI", "Microservices", "Kubernetes"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/AI.svg" 
                            text="Artificial Inteligence" 
                            description="Skilled in artificial intelligence with hands-on experience in developing intelligent systems for decision-making, automation, and perception tasks. Proficient with AI frameworks and libraries across domains including machine learning, deep learning, natural language processing, and computer vision, as well as in deploying models in production environments using cloud and edge technologies."
                            keyTerms={["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Reinforcement Learning", "Robotics & Perception", "TensorFlow", "PyTorch", "Keras", "OpenCV", "YOLOv5", "OpenAI", "Antropic", "Meta", "Google"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/Cybersecurity.svg" 
                            text="Cybersecurity" 
                            description="Experienced in cybersecurity principles and practices, specializing in protecting information systems against threats through risk assessment, threat mitigation, incident response, and implementation of security controls. Proficient with network security, application security, identity management, and compliance frameworks to safeguard data and infrastructure."
                            keyTerms={["Firewalls", "VPN", "VLAN", "Cryptography", "Network", "Application"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/OS.svg" 
                            text="OS management" 
                            description="Experienced in operating system management encompassing installation, configuration, monitoring, performance tuning, security hardening, and troubleshooting of both desktop and server OS environments. Proficient in managing Windows, Linux, and Unix systems to ensure reliability, scalability, and security for enterprise applications."
                            keyTerms={["Linux", "Windows", "Ubuntu", "Unix", "CMD", "Powershell", "CLI"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Social/StackOverflow.svg" 
                            text="Backend Development" 
                            description="Skilled in backend development with expertise in building scalable, secure, and efficient server-side applications and APIs. Experienced in designing databases, implementing business logic, and integrating third-party services to support dynamic, high-performance web and mobile applications."
                            keyTerms={["Express.js", "Django", "Flask", "RESTAPI"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                        <Knowledge 
                            svgPath="./assets/Logos/Content/Agile.svg" 
                            text="Agile Methodologies" 
                            description="Experienced in Agile methodologies to drive iterative development, enhance collaboration, and deliver customer value efficiently. Skilled in applying Scrum, Kanban, and Lean principles to manage projects, optimize workflows, and foster continuous improvement in software and product development teams."
                            keyTerms={["SCRUM", "Jira", "Metrics", "Kanban"]}
                            projects={[
                                {
                                    name: "E-commerce Platform",
                                    description: "Full-stack web application built with JavaScript and Node.js",
                                    link: "https://github.com/example/ecommerce"
                                },
                                {
                                    name: "Machine Learning Pipeline",
                                    description: "Data processing pipeline developed in Python with scikit-learn",
                                    link: "https://github.com/example/ml-pipeline"
                                }
                            ]} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;