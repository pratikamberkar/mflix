import Navbar from '../components/Navbar';
import Row from '../Row';
import './home.scss';
import Request from '../Request';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <img width="100%" src="./images/flix-background.jpg" alt="M-Flix Logo" />
        <Row title="Netflix Originals" fetchUrl={Request.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={Request.fetchTopRated} />
    </div>
  )
}

export default Home;
