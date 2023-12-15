import { useEffect, useState } from "react"
import api from '../api'

const ProjectInput = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const projectsRes = await api.fetchProjects()
      setProjects(projectsRes)
    }

    getProjects()
  }, [])

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