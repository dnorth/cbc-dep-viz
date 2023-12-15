import React from 'react';
import DependencyVisualization from './pages/DependencyVizualization';
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
