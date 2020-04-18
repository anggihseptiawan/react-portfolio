import React from 'react';
import './ContactPage.style.scss';

const ContactPage = () => (
    <main className="contact">
        <h5>Reach Me Out</h5>
        <p>Let's build something great together. If you'd like to start a new project, need help with an existing project or have any other enquiry, please get in touch. </p>
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
    </main>
);

export default ContactPage;