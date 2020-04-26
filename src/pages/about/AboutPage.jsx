import React from 'react';
import './AboutPage.style.scss';
import imgProfile from '../../assets/images/profile2.jpg';
import Fade from 'react-reveal/Fade';

const AboutPage = () => (
    <div className="container">
        <header className="about">
            <Fade>
                <img src={imgProfile} alt="profile" />
                <h1>
                    <Fade bottom cascade delay="500">
                        ANGGIH SEPTIAWAN
                    </Fade>
                </h1>
            </Fade>
        </header>
        <main className="about">
            <div className="left-side">
                <Fade bottom>
                    <h1>Hi, nice to meet you, i'm a creative frontend developer based in jakarta</h1>
                </Fade>
                <Fade bottom>
                    <p>I started getting into web development when I self-learned HTML and CSS in 2017, Nowadays I continue to build web stuff, both professionally and as a hobby.</p>
                </Fade>
                <Fade bottom>
                    <p>I've learn many things, not just a frontend stuff, i learn a backend too, like php and their framework such as codeigniter and laravel. Currently, i'm studying at Pradita University ( Information Technology ). Although I primarilly work as a freelance front-end web developer, I also have agency experience which has enabled me to foster the right mix of theory and practice in my projects.</p>
                </Fade>
                <Fade bottom>
                    <a href="mailto:anggihseptiawan@gmail.com">Email Me</a>
                </Fade>
            </div>
            <div className="right-side">
                <Fade bottom>
                    <h1>Skill</h1>
                </Fade>
                <Fade bottom>
                    <p>I utilize the following programming languages to build the backbone of effeicient, future-proof websites.</p>
                </Fade>
                <ul>
                    <div className="one">
                        <Fade bottom>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>BOOTSTRAP</li>
                        </Fade>
                    </div>
                    <div className="two">
                        <Fade bottom>
                            <li>JAVASCRIPT</li>
                            <li>REACT JS</li>
                            <li>GIT VERSION CONTROL</li>
                            <li>PHP</li>
                        </Fade>
                    </div>
                </ul>
            </div>
        </main>
    </div>
);


export default AboutPage;