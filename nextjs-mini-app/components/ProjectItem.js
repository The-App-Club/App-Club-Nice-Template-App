const ProjectItem = ({ index, project }) => {
  return (
    <p key={index} data-project-id={project.id}>
      {project.name}
    </p>
  );
};

export default ProjectItem;
