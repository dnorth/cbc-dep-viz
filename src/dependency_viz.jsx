import { React } from "react";
import ProjectInput from "./components/ProjectInput";

import styles from "./dependency_viz.module.css";

export const DependencyVisualization = () => {
  return (
    <div className={styles.depVizContainer}>
      <h1>Project</h1>
      <ProjectInput />
      <h2>Graph Stats</h2>
      <table>
        <tbody>
          <tr>
            <td>Task Count</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Dependency Count</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Root Count</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Max Depth</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      <h2>Graph Visualization</h2>
      <div>Graph Viz Component</div>
    </div>
  );
};
