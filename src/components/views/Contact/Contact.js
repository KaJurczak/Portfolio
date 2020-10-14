import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Contact.module.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';

const Contact = () => (
  <div>
  <Container className={styles.root}>
    <div className={styles.textWrapper}>
      <h2 className={styles.title}>Kontakt</h2>
      <div className={styles.icons}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className={styles.paper}>
              <a href='https://drive.google.com/file/d/1N_qvLC0CYtz4ttsK4RgZkgqvuis84huv/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <span>Curriculum Vitae</span>
                <DescriptionIcon>CV</DescriptionIcon>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.paper}>
              <a href='mailto:karolinajurczakk@gmail.com' target='_blank' rel='noopener noreferrer'>
                <span>Email</span>
                <EmailIcon>Email</EmailIcon>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.paper}>
              <a href='https://www.linkedin.com/in/karolina-jurczak/' target='_blank' rel='noopener noreferrer'>
                <span>LinkedIn</span>
                <LinkedInIcon>LinkedIn</LinkedInIcon>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.paper}>
              <a href='https://github.com/KaJurczak/Portfolio' target='_blank' rel='noopener noreferrer'>
                <span>GitHub</span>
                <GitHubIcon>GitHub</GitHubIcon>
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  </Container>
</div>

);

Contact.propTypes = {
  // className: PropTypes.string,
};

export default Contact;