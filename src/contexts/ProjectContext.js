import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import api from '../api';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [dependencies, setDependencies] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      console.log('fetching projects...')
      const projectsRes = await api.fetchProjects();
      setProjects(projectsRes);
      setSelectedProject(projectsRes[0])
    };

    getProjects();
  }, []);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      if (selectedProject) {
        const [tasksRes, depsRes] = await Promise.all([api.fetchTasks(selectedProject.id), api.fetchDependencies(selectedProject.id)])
        setTasks(tasksRes);
        setDependencies(depsRes);
      }
    };

    fetchProjectDetails();
  }, [selectedProject]);

  return (
    <ProjectContext.Provider value={{ projects, selectedProject, tasks, dependencies, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: PropTypes.node
}