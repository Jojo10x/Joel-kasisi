import "./projectcard.scss";

interface ProjectCardProps {
    src: string;
    header: string;
    description: string;
    status: string;
    url?: string;
}

const ProjectCard = ({ src, header, description, status, url }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={header} />
                    <div className="hoverOverlay">
                        View Project
                    </div>
                </a>
            </div>
            <div className="project-content">
                <h3>{header}</h3>
                <p>{description}</p>
                <div className={`status ${status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {status}
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;