import "../styles/ProjectCard.css";
import useIsMobile from "../hooks/useIsMobile";
import ProgressBar from "./ProgressBar";
import Tag from "./Tag";
import { TAGS } from "../config";

const ProjectCard = ({ project }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`card ${isMobile && "mobile"}`}
      role="region"
      aria-labelledby={`card-title-${project.id}`}
    >
      <div className="card-image" aria-hidden="true">
        Image
      </div>
      <div className="card-content">
        <p aria-label={`Location: ${project.location}`}>{project.location}</p>
        {project.tags?.length ? (
          <div className="flex-row-centered" role="list" aria-label="Tags">
            {project.tags.map((tag) => (
              <div key={tag} role="listitem">
                <Tag key={tag} tagName={TAGS[tag]} />
              </div>
            ))}
          </div>
        ) : null}
        <h3>{project.title}</h3>
        <p className="description">{project.description}</p>
        {project.daysUntilEndDate > 0 && (
          <ProgressBar progress={project.completionPercentage} />
        )}
        <div className="flex-row-centered">
          <div className="clock-icon" aria-hidden="true" />
          <p aria-label={project.completionStatus}>
            {project.completionStatus}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
