import React, { createContext } from 'react';
import PropTypes from 'prop-types'
import { useFetchProjects } from '../hooks/useFetchProjects';
import { useFetchProjectDetails } from '../hooks/useFetchProjectDetails';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const { projects, selectedProject, setSelectedProject, isLoading: isProjectsLoading, error: projectsError } = useFetchProjects();

  const { tasks, dependencies, isLoading: isDetailsLoading, error: detailsError } = useFetchProjectDetails(selectedProject);

  return (
    <ProjectContext.Provider value={{
      projects,
      selectedProject,
      setSelectedProject,
      tasks,
      dependencies,
      isProjectsLoading,
      projectsError,
      isDetailsLoading,
      detailsError
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: PropTypes.node
}