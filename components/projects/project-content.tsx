export const ProjectContent = ({ project }: { project: any }) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h2>Overview</h2>
      <p>{project.description}</p>

      <h2>Features</h2>
      <ul>
        <li>Responsive design for all device sizes</li>
        <li>Modern UI with smooth animations</li>
        <li>Optimized performance and accessibility</li>
        <li>Integration with various APIs and services</li>
      </ul>

      <h2>Technical Details</h2>
      <p>
        This project was built using {project.technologies.join(", ")}. The
        architecture follows modern best practices for scalability and
        maintainability.
      </p>

      <h2>Challenges & Solutions</h2>
      <p>
        One of the main challenges was implementing a responsive design that
        works seamlessly across all devices. This was solved by using a
        mobile-first approach and carefully testing on various screen sizes.
      </p>

      <h2>Outcome</h2>
      <p>
        The project was successfully delivered and has received positive
        feedback from users. It demonstrates my ability to create modern,
        user-friendly web applications using the latest technologies.
      </p>
    </div>
  );
};
