import React from 'react';
import imgLenovo from '../../assets/images/pro_1.png';
import imgCoffee from '../../assets/images/pro_2.png';
import imgKocplay from '../../assets/images/pro_3.png';
import './project.style.scss';

export const ProjectComponent = () => (
    <main className="project">
        <div className="project_one">
            <h3 className="title">LENOVO LEGION</h3>
            <img src={imgLenovo} alt="lenovo" />

            <a href="https://lenovo.legion.com"><span>view project</span></a>

            <div className="right">
                <h1>01</h1>
            </div>
        </div>
        <div className="project_two">
            <h3 className="title">COFFEE FARM</h3>
            <img src={imgCoffee} alt="coffe-farm" />

            <a href="https:myskripsi.id/kopi-kita"><span>view project</span></a>

            <div className="right">
                <h1>02</h1>
            </div>
        </div>
        <div className="project_three">
            <h3 className="title">K.O.C PLAY</h3>
            <img src={imgKocplay} alt="kocplay" />

            <a href="https://kocplay.com"><span>view project</span></a>

            <div className="right">
                <h1>03</h1>
            </div>
        </div>
    </main>
);