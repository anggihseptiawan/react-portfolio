import React from 'react';
import { Link } from 'react-router-dom';
import ImageProfile from '../../assets/images/profile.jpg';
import './HomePage.style.scss';

const HomePage = () => (
    <main className="home">
        <div className="left-side">
            <div className="greet">
                <h2>Hi There</h2>
            </div>
            <div className="image-container">
                <img src={ImageProfile} alt="profile" />
            </div>
        </div>
        <div className="right-side">
            <div className="caption">
                <h2>Welcome to my personal website</h2>
                <p>My name is Anggih Septiawan <br /> I'm s student and i live in jakarta</p>
                <Link to="/about">LEARN MORE</Link>
            </div>
        </div>
    </main>
);

export default HomePage;

