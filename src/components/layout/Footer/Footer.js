import React from 'react';
import styles from './Footer.module.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <p>©2020 Karolina Jurczak</p>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a href='mailto:karolinajurczakk@gmail.com' target='_blank' rel='noopener noreferrer'>
              <EmailIcon>Email</EmailIcon>
            </a>
          </li>
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

export default Footer;