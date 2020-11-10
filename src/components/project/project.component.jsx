import React from 'react';
import imgLenovo from '../../assets/images/pro_1.png';
import imgClothshop from '../../assets/images/pro_4.png';
import imgKocplay from '../../assets/images/pro_3.png';
import './project.style.scss';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export const ProjectComponent = ({ className, title, img, href, number }) => (
    <main className="project">
        <div className={className}>
            <Fade delay="1000">
                <h3 className="title">{title}</h3>
            </Fade>
            <Zoom duration="2000">
                <img src={img === 'imgLenovo' ? imgLenovo : null || img === 'imgClothshop' ? imgClothshop : null || img === 'imgKocplay' ? imgKocplay : null } alt="images" />
            </Zoom>

            <a href={href}><span>view project</span></a>

            <div className="right">
                <h1>{number}</h1>
            </div>
        </div>
    </main>
);