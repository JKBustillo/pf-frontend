import React from 'react';
import './index.scss';
 
const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <p className="about-text">Sobre nosotros</p>

            <div className="aboutus-data">
                <div className="aboutus-card">
                    <img src="https://avatars0.githubusercontent.com/u/23313021?s=460&u=752d24f078578ddc17e4cf95bc12593a6ecb6cd5&v=4" alt="william" />
                    <p>William Atencia</p>
                    <a href="https://github.com/KodeWil"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="git" /></a>
                </div>
                <div className="aboutus-card">
                    <img src="https://avatars2.githubusercontent.com/u/28761417?s=460&u=c853afc7188bc1f3e3a40564073b33027002155d&v=4" alt="william" />
                    <p>Jose Bustillo</p>
                    <a href="https://github.com/JKarmine"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="git" /></a>
                </div>
                <div className="aboutus-card">
                    <img src="https://avatars1.githubusercontent.com/u/25647268?s=460&v=4" alt="william" />
                    <p>Juan Rambal</p>
                    <a href="https://github.com/herasj"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="git" /></a>
                </div>
            </div>

            <p className="aboutus-textContent">Somos estudiantes de último semestre de Ingeniería de Sistemas y Computación en la Universidad del Norte apasinados por el desarrollo de aplicaciones web y de Machine Learning, entusiastas de las redes sociales queriendo hacer un cambio.</p>
        </div>
    );
}
 
export default AboutUs;