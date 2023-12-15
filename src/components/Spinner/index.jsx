import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.css'

const Spinner = ({ small }) => <div className={classnames(styles.loader, { [styles.small]: small })}></div>;

Spinner.propTypes = {
  small: PropTypes.boolean
}

export default Spinner;