import React from 'react';
import './HomePage.style.scss';
import { ProjectComponent } from '../../components/project/project.component';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <main className="home">
        <div className="container">
            <header className="hero-section">
                <h1 className="top">A STUDENT</h1>
                <h1 className="middle">FRONTENT DEVELOPER</h1>
                <h1 className="bottom">TECH ENTUSIAST</h1>

                <p className="tagline">I create something <span> awesome</span>, especially <span>website</span></p>

                <small className="foot">I hope you scroll it down, i'll show you something good <br /> and if you scroll, you're gonna be my friends :)</small>
            </header>
        </div>
        <ProjectComponent />
        <div className="more">
            <Link to="/about">
                <h1>MORE ABOUT ME ?</h1>
            </Link>
        </div>
    </main>
);

export default HomePage;

