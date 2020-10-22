import React from 'react';
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

export default NotFound;
