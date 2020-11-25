import React from 'react';
import './index.scss';

import William from '../../assets/photos/William.png';
import Jose from '../../assets/photos/Jose.png';
import Rambalt from '../../assets/photos/Rambalt.jpg';
 
const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <p className="about-text">Sobre nosotros</p>

            <div className="aboutus-data">
                <div className="aboutus-card">
                    <img src={William} alt="william" />
                    <p>William Atencia</p>
                    <a href="https://github.com/KodeWil"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="git" /></a>
                </div>
                <div className="aboutus-card">
                    <img src={Jose} alt="jose" />
                    <p>Jose Bustillo</p>
                    <a href="https://github.com/JKarmine"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="git" /></a>
                </div>
                <div className="aboutus-card">
                    <img src={Rambalt} alt="rambal" />
                    <p>Juan Rambal</p>
                    <a href="https://github.com/herasj"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="git" /></a>
                </div>
            </div>

            <p className="aboutus-textContent">Somos estudiantes de último semestre de Ingeniería de Sistemas y Computación en la Universidad del Norte apasionados por el desarrollo de aplicaciones web y de Machine Learning, entusiastas de las redes sociales queriendo hacer un cambio.</p>
        </div>
    );
}
 
export default AboutUs;