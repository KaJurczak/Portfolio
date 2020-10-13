import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.root}>
    <h2>Header</h2>
  </div>
);

Header.propTypes = {
  // className: PropTypes.string,
};

export default Header;