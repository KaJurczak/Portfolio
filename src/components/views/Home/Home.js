import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Home.module.scss';
import Container from '@material-ui/core/Container';

const Home = () => (
  <div>
    <Container className={styles.root}>
      <h2>Witaj</h2>
      <p className={styles.text}>
      Trafiłeś na stronę przedstawiającą najważniejsze informacje o mnie. <br></br>
      Jestem Karolina. <br></br>
      Od półtora roku napędza mnie chęć zmiany swojej ścieżki zawodowej na front-end. Niedawno zakończyłam obszerny kurs programowania - Web Developer Plus w Kodilli. Poza tym przy kolejnych projekcikach korzystam nieustannie z morza wiedzy onlinowej:).
      Dotychczas moja ścieżka zawodowa związana była z inżynierskimi tematami, jednak jest w niej parę wspólnych cech, które zachęciły mnie do pójścia w stronę budowy front-endu. <br></br>
      Przede wszystkim lubię aby moja praca przynosiła efekt, aby po jej zakończeniu powstał &quot;żywy&quot; produkt. I wiem że osiągnięcie tego wymaga miliona małych kroczków, cierpliwości, a czasem przebrnięcia przez dość zaskakujące problemy. Mam doświadczenie w pracy w zespole, wiem że deadline to słowo klucz a klient (i grafik;) ma prawie zawsze rację. <br></br>
      W swojej dotychczasowej ścieżce zawodowej konieczne było ciągłe poszerzanie wiedzy, a na ostatnim stanowisku (asystenta projektanta) poznawanie nowych narzędzi i technologii. <br></br>
      Obecnie szukam swojej pierwszej pracy w IT. 
      </p>
      <br></br>
      {/* <h2>Wybrane produkty</h2> */}
      <div className={styles.l}>
        {/* {plants.length !== 0 ? (
          <GridList cellHeight={180} className={classes.gridList}>
            {plants.map((plant) => (
              <GridListTile key={plant._id} className={styles.plantWrapper} component={Link} to={`/plant/${plant._id}`}>
                <img src={plant.photo[0]} alt={plant.polishName} />
                <GridListTileBar
                  title={plant.polishName}
                  subtitle={<span>price: {plant.price}PLN</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${plant.polishName}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        ) : (
          <p>Galeria już wkrótce</p>
        )} */}
      </div>
    </Container>
  </div>
);

Home.propTypes = {
  // className: PropTypes.string,
};

export default Home;