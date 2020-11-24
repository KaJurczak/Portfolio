import React from 'react';
import styles from './SkillsProjects.module.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const SkillsProjects = () => (
  <div>
    <Container className={styles.root}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>WYKORZYSTYWANE TECHNOLOGIE</h2>
        <div className={styles.skills}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <h4>Frond-end</h4>
              <p>HTML, CSS, RWD, JavaScript ES6, Bootstrap, Material-UI, AJAX, React, Redux</p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h4>Back-end</h4>
              <p>Node, Express, MongoDB</p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h4>Narzędzia</h4>
              <p>Git, NPM, Yarn, Jira, Webpack</p>
            </Grid>
          </Grid>
        </div>
        <h2 className={styles.title}>PROJEKTY</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className={styles.projectWrapper}>
              <div className={styles.imgWrapper}>
                <img src={'/Portfolio/images/Portfolio.JPG'} alt={'portfolio'} />
                <div className={styles.projectButtons}>
                  <Button href={'https://kajurczak.github.io/Portfolio/'} color="inherit" className={styles.button}>
                      KOD
                  </Button>
                  <Button href={'https://github.com/KaJurczak/Portfolio'} color="inherit" className={styles.button}>
                      Demo
                  </Button>
                </div>
              </div>
              <div className={styles.contentWrapper}>
                <p>Portfolio</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.projectWrapper}>
              <div className={styles.imgWrapper}>
                <img src={'/Portfolio/images/Gardener.JPG'} alt={'gardener'} />
                <div className={styles.projectButtons}>
                  <Button href={'https://github.com/KaJurczak/Gardener'} color="inherit" className={styles.button}>
                      KOD
                  </Button>
                  <Button href={'https://gardenershop-beaa8.web.app/'} color="inherit" className={styles.button}>
                      Demo
                  </Button>
                </div>
              </div>
              <div className={styles.contentWrapper}>
                <p>Gardener - projekt sklepu internetowego</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  </div>
);

export default SkillsProjects;