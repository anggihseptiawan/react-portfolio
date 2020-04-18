import React from 'react';
import Project1 from '../../assets/images/pro_1.png';
import Project2 from '../../assets/images/pro_2.png';
import Project3 from '../../assets/images/pro_3.png';
import './ProjectPage.style.scss';


const ProjectPage = () => (
    <main className="project">
        <h5>Here are some project that i have build</h5>
        <div className="thumbnail-list">
            <div className="thumbnail">
                <span>Lenovo legion</span>
                <div className="image-container">
                    <img src={Project1} alt="lenovo" />
                </div>
                <a href="https://legion.lenovo.com">visit site</a>
            </div>
            <div className="thumbnail">
                <span>Coffe farm</span>
                <div className="image-container">
                    <img src={Project2} alt="coffe" />
                </div>
                <a href="https://myskripsi.id/kopi-kita">visit site</a>
            </div>
            <div className="thumbnail">
                <span>KOCPlay</span>
                <div className="image-container">
                    <img src={Project3} alt="kocplay" />
                </div>
                <a href="https://kocplay.com">visit site</a>
            </div>
        </div>
    </main>
);


export default ProjectPage;

