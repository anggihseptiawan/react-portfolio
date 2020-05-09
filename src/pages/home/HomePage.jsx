import React from 'react';
import './HomePage.style.scss';
import { ProjectComponent } from '../../components/project/project.component';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const HomePage = () => (
    <main className="home">
        <div className="container">
            <header className="hero-section">
                <Fade bottom cascade>
                    <h1 className="top">A STUDENT</h1>
                    <h1 className="middle">FRONTEND DEVELOPER</h1>
                    <h1 className="bottom">TECH ENTUSIAST</h1>
                </Fade>

                <Fade delay="1000">
                    <p className="tagline">I create something <span> awesome</span>, especially <span>website</span></p>
                </Fade>

                <Fade delay="1500">
                    <small className="foot">I hope you scroll it down, i'll show you something good <br /> and if you scroll, you're gonna be my friends :)</small>
                </Fade>
            </header>
        </div>
        <ProjectComponent className="project_one" title="LENOVO LEGION" img="imgLenovo" href="https://legion.lenovo.com" number="01" />
        <ProjectComponent className="project_two" title="COFFEE FARM" img="imgCoffee" href="https://myskripsi.id/kopi-kita" number="02" />
        <ProjectComponent className="project_three" title="K.O.C PLAY" img="imgKocplay" href="http://kocplay.com" number="03" />
        <div className="more">
            <Link to="/about">
                <Fade bottom cascade delay="500">
                    <h1>MORE ABOUT ME ?</h1>
                </Fade>
            </Link>
        </div>
    </main>
);

export default HomePage;

