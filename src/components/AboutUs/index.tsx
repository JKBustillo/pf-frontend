import React from 'react';
import './index.scss';
 
const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <p className="about-text">Sobre nosotros</p>

            <div className="aboutus-data">
                <div className="aboutus-card">
                    <img src="https://puu.sh/GRxGE/0267466d1c.png" alt="william" />
                    <p>William Atencia</p>
                    <a href="https://github.com/KodeWil"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="git" /></a>
                </div>
                <div className="aboutus-card">
                    <img src="https://puu.sh/GRxGH/5e41ae16ff.png" alt="jose" />
                    <p>Jose Bustillo</p>
                    <a href="https://github.com/JKarmine"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="git" /></a>
                </div>
                <div className="aboutus-card">
                    <img src="https://puu.sh/GRxGD/105ddb7dd6.jpg" alt="rambal" />
                    <p>Juan Rambal</p>
                    <a href="https://github.com/herasj"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="git" /></a>
                </div>
            </div>

            <p className="aboutus-textContent">Somos estudiantes de último semestre de Ingeniería de Sistemas y Computación en la Universidad del Norte apasionados por el desarrollo de aplicaciones web y de Machine Learning, entusiastas de las redes sociales queriendo hacer un cambio.</p>
        </div>
    );
}
 
export default AboutUs;