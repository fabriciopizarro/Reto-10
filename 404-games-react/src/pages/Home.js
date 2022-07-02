import Carrousel from '../components/Carrousel';
import NewGames from '../components/NewGames';
import JuegosGratuitos from '../components/JuegosGratuitos';
import Explora from '../components/Explora';
import Promocion from '../components/Promocion';
import JuegosPeru from '../components/JuegosPeru';

const Home = () => {
    return (
        <>

            <Carrousel />
            <NewGames />
            <JuegosPeru />
            <Explora />
            <NewGames />
            <NewGames />
            <JuegosGratuitos />
            <Promocion />
        </>
    );
}

export default Home;