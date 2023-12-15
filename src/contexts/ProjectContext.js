import React, { createContext } from 'react';
import PropTypes from 'prop-types'
import { useFetchProjects } from '../hooks/useFetchProjects';
import { useFetchProjectDetails } from '../hooks/useFetchProjectDetails';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const { projects, selectedProject, setSelectedProject, isLoading: areProjectsLoading, error: projectsError } = useFetchProjects();

  const { tasks, dependencies, isLoading: areDetailsLoading, error: detailsError } = useFetchProjectDetails(selectedProject);

  return (
    <ProjectContext.Provider value={{
      projects,
      selectedProject,
      setSelectedProject,
      tasks,
      dependencies,
      areProjectsLoading,
      projectsError,
      areDetailsLoading,
      detailsError
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: PropTypes.node
}