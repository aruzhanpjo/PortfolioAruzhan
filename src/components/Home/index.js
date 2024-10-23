import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-a.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'u', 'z', 'h', 'a', 'n'];
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
    {/*second letter has a delay of 12 (1.2 seconds)*/}
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray} 
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray} 
                idx={18} />

                </h1>
                <h2>Java | Python | Angular | .NET</h2>
                
                <a href="https://drive.google.com/file/d/1_DDV6boPqelJ26-gyz3t7EqWcFsD1eI4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='flat-button2'>VIEW RESUME</a>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                


            </div>
        <Logo />
        </div>
        <Loader type="pacman" />
        </>
    
    );
}

export default Home