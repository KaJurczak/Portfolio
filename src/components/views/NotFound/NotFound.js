import React from 'react';
// import PropTypes from 'prop-types';

import styles from './NotFound.module.scss';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <Container className={styles.root}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>NotFound</h2>
        <Link to={`/`} variant="outlined">
          Go to main page
        </Link>
      </div>
    </Container>
  </div>
);

NotFound.propTypes = {
  // className: PropTypes.string,
};

export default NotFound;
