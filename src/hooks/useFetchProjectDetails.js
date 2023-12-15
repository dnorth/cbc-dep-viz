import { useState, useEffect } from 'react';
import api from '../api';

export const useFetchProjectDetails = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      if (selectedProject) {
        setIsLoading(true);
        try {
          const [tasksRes, depsRes] = await Promise.all([
            api.fetchTasks(selectedProject.id),
            api.fetchDependencies(selectedProject.id)
          ]);
          setTasks(tasksRes);
          setDependencies(depsRes);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProjectDetails();
  }, [selectedProject]);

  return { tasks, dependencies, isLoading, error };
};
