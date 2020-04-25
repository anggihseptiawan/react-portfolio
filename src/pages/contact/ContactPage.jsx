import React from 'react';
import './ContactPage.style.scss';
import Fade from 'react-reveal/Fade';

const ContactPage = () => (
    <main className="contact">
        <div className="container">
            <Fade bottom>
                <h1>LET ME KNOW YOUR PROBLEM, <br /> I'M GLAD TO HEAR THAT.</h1>
            </Fade>
            <Fade bottom delay="500">
                <h5>Reach Me Out</h5>
            </Fade>
            <Fade bottom delay="800">
                <p>Let's build something great together. If you'd like to start a new project, need help with an existing project or have any other enquiry, please get in touch. </p>
            </Fade>
            <Fade bottom delay="1200">
                <div className="call">
                    <div className="mail">
                        <p>Email</p>
                        <span>anggihseptiawan@gmail.com</span>
                    </div>
                    <div className="in">
                        <p>Linkedin</p>
                        <span>Anggih Septiawan</span>
                    </div>
                    <div className="loc">
                        <p>Github</p>
                        <a href="https://github.com/anggihseptiawan">Anggih Septiawan</a>
                    </div>
                </div>
            </Fade>
        </div>
    </main>
);

export default ContactPage;