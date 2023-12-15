import { useState, useEffect } from 'react';
import api from '../api';

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const projectsRes = await api.fetchProjects();
        setProjects(projectsRes);
        setSelectedProject(projectsRes[0]);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, selectedProject, setSelectedProject, isLoading, error };
};
