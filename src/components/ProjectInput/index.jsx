import { useProject } from "../../hooks/useProject"

import styles from './index.module.css'

const ProjectInput = () => {
  const { projects, setSelectedProject } = useProject()

  const handleOnChange = (e) => {
    const selectedProject = projects.find(p => p.id === e.target.value);
    setSelectedProject(selectedProject)
  }

  return (
    <div className={styles.projectInput}>
      <label htmlFor="project-select">Choose a project:</label>
      <select onChange={handleOnChange} id="project-select">
        {
          projects.map((project) => (
            <option value={project.id} key={project.id}>{project.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default ProjectInput