import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Home.module.scss';
import Container from '@material-ui/core/Container';

const Home = () => (
  <div>
    <Container className={styles.root}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>Witaj</h2>
        <p className={styles.text}>
        Jestem Karolina. <br></br>
        Trafiłeś na stronę przedstawiającą najważniejsze informacje o mnie. <br></br>
        Od półtora roku napędza mnie chęć zmiany swojej ścieżki zawodowej na front-end. Niedawno zakończyłam obszerny kurs programowania - Web Developer Plus w Kodilli. <br></br>
        A ponieważ ćwiczenie czyni mistrza, tworzę kolejne projekty. 
        </p>
        <h3 className={styles.subtitle}>Obecnie szukam swojej pierwszej pracy w IT.</h3>
      </div>
    </Container>
  </div>
);

Home.propTypes = {
  // className: PropTypes.string,
};

export default Home;