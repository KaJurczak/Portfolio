import React from 'react';
import styles from './Header.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
});

const Header = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={styles.menuItem}>
        <ListItem button key={'text'} component={Link} to={'/Portfolio/'} color="inherit" className={styles.button}>
          <ListItemText>HOME</ListItemText>
        </ListItem>
        <ListItem button key={'text'} component={Link} to={'/Portfolio/skillsProjects'} color="inherit" className={styles.button}>
          <ListItemText>PROJEKTY</ListItemText>
        </ListItem>
        <ListItem button key={'text'} component={Link} to={'/Portfolio/aboutMe'} color="inherit" className={styles.button}>
          <ListItemText>O MNIE</ListItemText>
        </ListItem>
        <ListItem button key={'text'} component={Link} to={'/Portfolio/contact'} color="inherit" className={styles.button}>
          <ListItemText>KONTAKT</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return(
    <div className={styles.root}>
      <AppBar className={styles.header} position="static">
        <Toolbar className={styles.buttonWrapper}>
          <div className={styles.logo}>
            <Typography className={styles.logo} component={Link} to={`/Portfolio/`} color="inherit" underline="hover">
              <span className="name">KAROLINA JURCZAK</span>
              <span className={styles.title}>junior front-end developer</span>
            </Typography>
          </div>
          <div className={styles.buttonMenu}>
            <Button component={Link} to={'/Portfolio/skillsProjects'} color="inherit" className={styles.button}>
              <div>
                Projekty
              </div>
            </Button>
            <Button component={Link} to={'/Portfolio/aboutMe'} color="inherit" className={styles.button}>
              <div>
                O mnie
              </div>
            </Button>
            <Button component={Link} to={'/Portfolio/contact'} color="inherit" className={styles.button}>
              <div>
                Kontakt
              </div>
            </Button>
          </div>
          <div className={styles.hamburgerMenu}>
            <IconButton edge="start" className={styles.hamburgerIcon} color="inherit" aria-label="menu">
              {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuIcon onClick={toggleDrawer(anchor, true)}  fontSize="large">{anchor}</MenuIcon>
                  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;