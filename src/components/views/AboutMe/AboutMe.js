import React from 'react';
import styles from './AboutMe.module.scss';
import Container from '@material-ui/core/Container';

const AboutMe = () => (
  <div>
    <Container className={styles.root}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>WCZEŚNIEJSZE DOŚWIADCZENIE</h2>
        <p className={styles.text}>
        Dotychczas moja ścieżka zawodowa związana była z inżynierskimi tematami, jednak jest w niej parę wspólnych cech, które zachęciły mnie do pójścia w stronę budowy front-endu. <br></br>
        Przede wszystkim lubię aby moja praca przynosiła efekt, aby po jej zakończeniu powstał &quot;żywy&quot; produkt. I osiągam to przez dziesiątki małych kroczków, cierpliwość, a czasem przebrnięcie przez dość zaskakujące problemy. <br></br>
        Mam doświadczenie w pracy w zespole, wiem że deadline to słowo klucz a klient (i grafik:) ma prawie zawsze rację... <br></br>
        Praca na wcześniejszych stanowiskach wymagała ode mnie ciągłego poszerzania wiedzy, a dodatkowo poznawania nowych narzędzi i technologii. <br></br>
        </p>
      </div>
    </Container>
  </div>
);

export default AboutMe;