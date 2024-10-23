import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJsSquare, faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
//import 'loaders.css/src/animations/ball-rotate.scss';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                I'm a dedicated Junior Computer Science Student with a strong focus on learning and applying technical skills. 
                I actively engage in online learning and hands-on projects, including Web App Development using Angular, .NET, and JavaScript.
                </p>

                <p>
                I have completed 2 internships focused on SWE and I'm currently seeking an internship opportunity for Summer 2025. 
                </p>

                <p>
                I'm committed to staying updated with the latest technology trends through tutorials and self-directed exploration.I have an unwavering drive to learn and create, and I'm eager to find opportunities to innovate, 
                collaborate, and make a positive impact on the world.
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>

                    <div className='face1'>
                        <FontAwesomeIcon icon={faNodeJs} color='#f06529'/>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGit} color='#ec4d28'/>
                    </div>

                </div>
            </div>

        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About;