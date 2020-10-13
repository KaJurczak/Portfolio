import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Badge from '@material-ui/core/Badge';

const Header = () => (
  <div className={styles.root}>
    <AppBar className={styles.header} position="static">
      <Toolbar className={styles.buttonWrapper}>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <div className={styles.logo}>
          <Typography className={styles.logo} component={Link} to={`/`} color="inherit" underline="hover">
            <span className="name">KAROLINA JURCZAK</span>
            <span className={styles.title}>junior front-end developer</span>
          </Typography>
        </div>
        <div>
          <Button component={Link} to={'/AboutMe'} color="inherit" className={styles.button}>
            <div>
              CV
            </div>
          </Button>
          <Button component={Link} to={'/Contact'} color="inherit" className={styles.button}>
            <div>
              Kontakt
            </div>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  // className: PropTypes.string,
};

export default Header;