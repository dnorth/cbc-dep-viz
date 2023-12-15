// O(n + m)
export const calculateRootCount = (dependencies) => {
  //n - number of dependencies
  const depsOrganized = dependencies.reduce((acc, dependency) => {
    return {
      predecessors: acc.predecessors.add(dependency.predecessor_id),
      successors: acc.successors.add(dependency.successor_id),
    }
  }, { predecessors: new Set(), successors: new Set()})

  //m - number of unique predecessors
  const setDifference = new Set(Array.from(depsOrganized.predecessors).filter(item => !depsOrganized.successors.has(item)))

  return setDifference.size
}

export const calculateMaxDepth = (tasks, dependencies) => {
  return tasks.length + dependencies.length
}