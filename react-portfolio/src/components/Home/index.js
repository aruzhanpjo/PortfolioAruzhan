import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-a.png';
import './index.scss';
const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I am 
                <img src={LogoTitle} alt="developer" />
                ruzhan
                <br />
                web developer
                </h1>
                <h2> Software engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home