import PropTypes from 'prop-types'
import Spinner from "../Spinner"
import { calculateRootCount, calculateMaxDepth } from '../../utils/graphDetails'

import { useProject } from "../../hooks/useProject"

import styles from './index.module.css'

const GraphDetails = () => {
  const { dependencies, tasks } = useProject()

  return (
    <>
      <h2>Graph Details</h2>
      <div className={styles.graphDetails}>
        <table>
          <tbody>
            <GraphRow title="Task Count" value={tasks.length} />
            <GraphRow title="Dependency Count" value={dependencies.length} />
            <GraphRow title="Root Count" value={calculateRootCount(dependencies)} />
            <GraphRow title="Max Depth" value={calculateMaxDepth(tasks, dependencies)} />
          </tbody>
        </table>
      </div>
    </>
  )
}

const GraphRow = ({ title, value }) => {
  const { areDetailsLoading } = useProject()

  return (
    <tr className={styles.row}>
      <td>{`${title}:`}</td>
      <td>
        { areDetailsLoading ? <Spinner small /> : value }
      </td>
    </tr>
  )
}

GraphRow.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number
}

export default GraphDetails