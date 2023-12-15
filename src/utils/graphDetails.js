export const getRoots = (tasks, dependencies) => {
  const successors = new Set(dependencies.map(dep => dep.successor_id));
  return tasks.filter(task => !successors.has(task.id)).map(task => task.id);
};

export const calculateRootCount = (tasks, dependencies) => {
  const roots = getRoots(tasks, dependencies);
  return roots.length;
};

export const calculateMaxDepth = (tasks, dependencies) => {
  const depsOrganized = dependencies.reduce((acc, dependency) => {
    if (!acc.graph[dependency.predecessor_id]) {
      acc.graph[dependency.predecessor_id] = [];
    }
    acc.graph[dependency.predecessor_id].push(dependency.successor_id);
    return acc;
  }, { graph: {} });

  const roots = getRoots(tasks, dependencies);
  const depthMemo = {};

  const dfs = (node) => {
    if (depthMemo[node] !== undefined) return depthMemo[node];
    if (!depsOrganized.graph[node] || depsOrganized.graph[node].length === 0) {
      depthMemo[node] = 1;
      return 1;
    }
    const maxDepth = Math.max(...depsOrganized.graph[node].map(successor => dfs(successor))) + 1;
    depthMemo[node] = maxDepth;
    return maxDepth;
  };

  return Math.max(...roots.map(root => dfs(root)));
};
