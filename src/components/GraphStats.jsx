import { useProject } from "../hooks/useProject"

const GraphStats = () => {
  const { dependencies, tasks } = useProject()

  return (
    <>
      <h2>Graph Stats</h2>
      <table>
        <tbody>
          <tr>
            <td>Task Count</td>
            <td>{tasks.length}</td>
          </tr>
          <tr>
            <td>Dependency Count</td>
            <td>{dependencies.length}</td>
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
    </>
  )
}

export default GraphStats