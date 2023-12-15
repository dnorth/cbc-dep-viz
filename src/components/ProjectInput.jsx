import { useProject } from "../hooks/useProject"

const ProjectInput = () => {
  const { projects } = useProject()

  return (
    <select>
      {
        projects.map((project) => (
          <option value={project.id} key={project.id}>{project.name}</option>
        ))
      }
    </select>
  )
}

export default ProjectInput