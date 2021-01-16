import React from "react";
import Fade from "react-reveal/Fade";
import imgProfile from "../../assets/images/profile2.jpg";
import "./AboutPage.style.scss";

const AboutPage = () => {
	return (
		<>
			<main className="about">
				<Fade>
					<img src={imgProfile} alt="profile" />
				</Fade>
				<div className="details">
					<Fade bottom>
						<h1>
							Hi{" "}
							<span role="img" aria-label="some-emoji">
								👋
							</span>{" "}
							Anggih Septiawan here, i'm a frontend developer
							based in jakarta
						</h1>
					</Fade>
					<Fade bottom>
						<p>
							I started getting into web development when I
							self-learned HTML and CSS in 2018, Nowadays I
							continue to build web stuff, both professionally and
							as a hobby.
						</p>
						<p>
							I've learn many things, not just a frontend, i also
							learn backend, like php and their framework such as
							codeigniter and laravel. Currently, i'm studying at
							Pradita University (Information Technology). I work
							at a software house company based in jakarta, and
							doing some side projects.
						</p>
						<p>
							For business inquiries, drop mail at
							<span className="text-teal">
								&nbsp;anggihseptiawan@gmail.com
							</span>
						</p>
					</Fade>

					<Fade bottom>
						<h1>Tech Stack</h1>
						<p className="mt-0">
							Here are some tech stack that i use and i'm
							currently learning for building website
						</p>
					</Fade>
					<ul>
						<div className="one">
							<Fade bottom>
								<li>HTML</li>
								<li>CSS</li>
								<li>Sass</li>
								<li>Bootstrap</li>
							</Fade>
						</div>
						<div className="two">
							<Fade bottom>
								<li>Javascript</li>
								<li>React JS</li>
								<li>Git Version Control</li>
								<li>PHP</li>
							</Fade>
						</div>
						<div className="two">
							<Fade bottom>
								<li>Tailwind CSS</li>
								<li>Next JS</li>
								<li>Firebase</li>
								<li>Styled Components</li>
							</Fade>
						</div>
					</ul>
				</div>
			</main>
		</>
	);
};

export default AboutPage;
