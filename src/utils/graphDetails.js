export const getRoots = (tasks, dependencies) => {
  const successors = new Set(dependencies.map(dep => dep.successor_id));
  return tasks.filter(task => !successors.has(task.id)).map(task => task.id);
};

export const calculateRootCount = (tasks, dependencies) => {
  const roots = getRoots(tasks, dependencies);
  return roots.length;
};

export const calculateMaxDepth = (tasks, dependencies) => {
  return tasks.length + dependencies.length
}