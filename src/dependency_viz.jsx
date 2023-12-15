import { React } from "react";
import ProjectInput from "./components/ProjectInput";
import GraphStats from "./components/GraphStats";

import styles from "./dependency_viz.module.css";
import { useProject } from "./hooks/useProject";

export const DependencyVisualization = () => {
  const { areProjectsLoading } = useProject()

  return (
    <div className={styles.depVizContainer}>
      <h1>Project Dependency Info</h1>
      {
        areProjectsLoading ? 'Loading...' : (
          <>
            <ProjectInput />
            <GraphStats />
            <h2>Graph Visualization</h2>
            <div>Graph Viz Component</div>
          </>
        )
      }
    </div>
  );
};
