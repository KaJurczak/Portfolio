import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <p>©2020 Karolina Jurczak</p>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/karolina-jurczak/' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon>LinkedIn</LinkedInIcon>
            </a>
          </li>
          <li>
            <a href='https://github.com/KaJurczak/Portfolio' target='_blank' rel='noopener noreferrer'>
              <GitHubIcon>GitHub</GitHubIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  // className: PropTypes.string,
};

export default Footer;