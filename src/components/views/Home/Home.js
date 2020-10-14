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
        Od półtora roku napędza mnie chęć zmiany swojej ścieżki zawodowej na front-end. Niedawno zakończyłam obszerny kurs programowania - Web Developer Plus w Kodilli. Przy kolejnych projektach korzystam nieustannie z morza wiedzy onlinowej:). <br></br>
        Dotychczas moja ścieżka zawodowa związana była z inżynierskimi tematami, jednak jest w niej parę wspólnych cech, które zachęciły mnie do pójścia w stronę budowy front-endu. <br></br>
        Przede wszystkim lubię aby moja praca przynosiła efekt, aby po jej zakończeniu powstał &quot;żywy&quot; produkt. I wiem że osiągnięcie tego wymaga miliona małych kroczków, cierpliwości, a czasem przebrnięcia przez dość zaskakujące problemy. Mam doświadczenie w pracy w zespole, wiem że deadline to słowo klucz a klient (i grafik:) ma prawie zawsze rację... <br></br>
        W swojej dotychczasowej ścieżce zawodowej konieczne było ciągłe poszerzanie wiedzy, a na ostatnim stanowisku (asystenta projektanta) poznawanie nowych narzędzi i technologii. <br></br>
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