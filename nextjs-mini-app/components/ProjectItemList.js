import ProjectItem from './ProjectItem';

const ProjectItemList = ({ data }) => {
  return (
    <div>
      {data.projects.map((project, index) => {
        return <ProjectItem index={index} project={project}></ProjectItem>;
      })}
    </div>
  );
};

export default ProjectItemList;
