import { Project } from "@/types";

export const ProjectContent = ({ project }: { project: Project }) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h2>Overview</h2>
      <p>{project.description}</p>

      {project.features && (
        <>
          <h2>Features</h2>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      {project.technicalDetails && (
        <>
          <h2>Technical Details</h2>
          <p>{project.technicalDetails}</p>
        </>
      )}

      {project.challenges && (
        <>
          <h2>Challenges</h2>
          <p>{project.challenges}</p>
        </>
      )}

      {project.outcome && (
        <>
          <h2>Outcome</h2>
          <p>{project.outcome}</p>
        </>
      )}
    </div>
  );
};
