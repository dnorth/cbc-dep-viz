import { React } from "react";
import ProjectInput from "../../components/ProjectInput";
import GraphDetails from "../../components/GraphDetails";
import Spinner from "../../components/Spinner";
import { useProject } from "../../hooks/useProject";

import styles from "./index.module.css";
import GraphViz from "../../components/GraphViz";

const DependencyVisualization = () => {
  const { areProjectsLoading } = useProject()

  return (
    <div className={styles.depVizContainer}>
      <h1>Project Dependency Info</h1>
      {
        areProjectsLoading ? <Spinner /> : (
          <>
            <ProjectInput />
            <GraphDetails />
            <GraphViz />
          </>
        )
      }
    </div>
  );
};

export default DependencyVisualization