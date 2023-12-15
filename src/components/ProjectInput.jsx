import { useProject } from "../hooks/useProject"

const ProjectInput = () => {
  const { projects, setSelectedProject } = useProject()

  const handleOnChange = (e) => {
    const selectedProject = projects.find(p => p.id === e.target.value);
    setSelectedProject(selectedProject)
  }

  return (
    <select onChange={handleOnChange}>
      {
        projects.map((project) => (
          <option value={project.id} key={project.id}>{project.name}</option>
        ))
      }
    </select>
  )
}

export default ProjectInput