import Navbar from '../components/Navbar';
import Row from '../Row';
import './home.scss';
import Request from '../Request';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-banner'>
        <Navbar />
        <div className='home-banner-background'>
          <img src="./images/flix-background.jpg" alt="M-flix background" />
          <div className='img-gradient'></div>
        </div>
      </div>
        <Row title="Netflix Originals" fetchUrl={Request.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={Request.fetchTopRated} />
    </div>
  )
}

export default Home;
