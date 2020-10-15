import React from 'react';
// import PropTypes from 'prop-types';

import styles from './SkillsProjects.module.scss';
import Container from '@material-ui/core/Container';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// import Gardener from '../../../../public/Gardener.JPG';

const SkillsProjects = () => (
  <div>
    <Container className={styles.root}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>Projekty</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className={styles.projectWrapper}>
              <div className={styles.imgWrapper}>
                <img src={'/images/Portfolio.JPG'} alt={'portfolio'} />
                <div className={styles.projectButtons}>
                  <Button component={Link} to={'https://kajurczak.github.io/Portfolio/'} color="inherit" className={styles.button}>
                      KOD
                  </Button>
                  <Button component={Link} to={'https://github.com/KaJurczak/Portfolio'} color="inherit" className={styles.button}>
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
                <img src={'/images/Gardener.JPG'} alt={'gardener'} />
                <div className={styles.projectButtons}>
                  <Button component={Link} to={'https://github.com/KaJurczak/Gardener'} color="inherit" className={styles.button}>
                      KOD
                  </Button>
                  <Button component={Link} to={'https://gardener-app.herokuapp.com/'} color="inherit" className={styles.button}>
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

SkillsProjects.propTypes = {
  // className: PropTypes.string,
};

export default SkillsProjects;