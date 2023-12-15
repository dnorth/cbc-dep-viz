import { React } from "react";
import ProjectInput from "./components/ProjectInput";
import GraphStats from "./components/GraphStats";
import { ProjectProvider } from "./contexts/ProjectContext";

import styles from "./dependency_viz.module.css";

export const DependencyVisualization = () => {
  console.log('dep render...')
  return (
    <ProjectProvider>
      <div className={styles.depVizContainer}>
        <h1>Project</h1>
        <ProjectInput />
        <GraphStats />
        <h2>Graph Visualization</h2>
        <div>Graph Viz Component</div>
      </div>
    </ProjectProvider>
  );
};
