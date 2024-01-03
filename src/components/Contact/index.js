import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ID',
                'template_ID,
                refForm.current,
                'PUBLIC API'
            )
            .then(
                () => {
                    alert('Email sent successfully!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send email. Please try again!')
                }
            )
    }


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in networking! So, don't hesitate to contact me!
                    </p>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input placeholder='Name' type='text' name='name' /> 
                                </li>    

                                <li className='half'>
                                    <input placeholder='Email' type='email' name='email' required />
                                </li>

                                <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                                
                            </ul>
                        </form>

                    </div>

                    


                </div>

                <div className='info-map'>
                    Aruzhan (Aru) Betigenova,
                    <br />
                    United States,
                    <br />
                    Mankato, MN <br />
                    <span>betigenova.aruzhan@gmail.com</span>

                </div>

                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[44.96366, 19.61045]} />
                    </MapContainer>

                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact