import React from 'react';
import './AboutPage.style.scss';
import imgProfile from '../../assets/images/profile2.jpg';

const AboutPage = () => (
    <div className="container">
        <main className="about">
            <div className="left-side">
                <h1>I'm Anggih Septiawan, a creative front-end developer based in jakarta</h1>
                <p>I started getting into web development when I self-learned HTML and CSS in 2017, Nowadays I continue to build web stuff, both professionally and as a hobby.</p>
                <p>I've learn many things, not just a frontend stuff, i learn a backend too, like php and their framework such as codeigniter and laravel. Currently, i'm studying at Pradita University ( Information Technology ). Although I primarilly work as a freelance front-end web developer, I also have agency experience which has enabled me to foster the right mix of theory and practice in my projects.</p>
                <a href="mailto:anggihseptiawan@gmail.com">Email Me</a>
            </div>
            <div className="right-side">
                <img src={imgProfile} alt="profile" />
            </div>
        </main>
        <section className="skill">
            <h1>Skill</h1>
            <p>I utilize the following programming languages to build the backbone of effeicient, future-proof websites.</p>
            <ul>
                <div className="one">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SASS</li>
                    <li>BOOTSTRAP</li>
                </div>
                <div className="two">
                    <li>JAVASCRIPT</li>
                    <li>REACT JS</li>
                    <li>GIT VERSION CONTROL</li>
                    <li>PHP</li>
                </div>
            </ul>
        </section>
    </div>
);


export default AboutPage;