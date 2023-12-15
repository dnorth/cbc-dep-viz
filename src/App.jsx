import React from 'react';
import {DependencyVisualization} from './dependency_viz';
import { ProjectProvider } from "./contexts/ProjectContext";

import './data'

function App() {
  return (
    <ProjectProvider>
      <DependencyVisualization />
    </ProjectProvider>
  )
}

export default App;
