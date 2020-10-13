import React from 'react';
// import PropTypes from 'prop-types';

import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className={styles.root}>
    <h2>NotFound</h2>
    <Link to={`/`} variant="outlined" color="primary" >
      Go to main page
    </Link>
  </div>
);

NotFound.propTypes = {
  // className: PropTypes.string,
};

export default NotFound;
