import PropTypes from 'prop-types'
import Spinner from "../Spinner"

import { useProject } from "../../hooks/useProject"

import styles from './index.module.css'

const GraphStats = () => {
  const { dependencies, tasks } = useProject()

  return (
    <>
      <h2>Graph Details</h2>
      <table>
        <tbody>
          <GraphRow title="Task Count" value={tasks.length} />
          <GraphRow title="Dependency Count" value={dependencies.length} />
          <GraphRow title="Root Count" value={0} />
          <GraphRow title="Max Depth" value={0} />
        </tbody>
      </table>
    </>
  )
}

const GraphRow = ({ title, value }) => {
  const { areDetailsLoading } = useProject()

  return (
    <tr className={styles.row}>
      <td>{`${title}:`}</td>
      { areDetailsLoading ? <Spinner small /> : <td>{value}</td> }
    </tr>
  )
}

GraphRow.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number
}

export default GraphStats