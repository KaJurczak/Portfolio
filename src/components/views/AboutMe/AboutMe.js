import React from 'react';
// import PropTypes from 'prop-types';

import styles from './AboutMe.module.scss';
import Container from '@material-ui/core/Container';

const AboutMe = () => (
  <div>
    <Container className={styles.root}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>Doświadczenie</h2>
      </div>
    </Container>
  </div>
);

AboutMe.propTypes = {
  // className: PropTypes.string,
};

export default AboutMe;