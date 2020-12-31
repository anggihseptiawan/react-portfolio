import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import imgLenovo from "../../assets/images/pro_1.png";
import imgKocplay from "../../assets/images/pro_3.png";
import imgClothshop from "../../assets/images/pro_4.png";
import "./project.style.scss";

export const ProjectComponent = ({ className, title, img, href, number }) => {
	const Description = () => {
		if (img === "imgLenovo") {
			return (
				<div className="desc">
					<p>
						Official website for lenovo legion, this is my project
						at my previous company in 2019
					</p>
					<p>
						<span className="text-teal">Tech stack :</span>{" "}
						Bootstrap, SlickJS & Laravel
					</p>
				</div>
			);
		} else if (img === "imgClothshop") {
			return (
				<div className="desc">
					<p>
						Some fun ecommerce website for implementing my knowledge
						in reactjs
					</p>
					<p>
						<span className="text-teal">Tech stack :</span> ReactJS,
						Redux, Firebase & NodeSass
					</p>
				</div>
			);
		} else {
			return (
				<div className="desc">
					<p>
						Some freelance project with my team, build in December
						2019
					</p>
					<p>
						<span className="text-teal">Tech stack :</span>{" "}
						Bootstrap, Owl Carousel, & Laravel
					</p>
				</div>
			);
		}
	};

	return (
		<main className="project">
			<div className={className}>
				<Fade delay="1000">
					<h3 className="title">{title}</h3>
				</Fade>
				<Zoom duration="2000">
					<img
						src={
							img === "imgLenovo"
								? imgLenovo
								: null || img === "imgClothshop"
								? imgClothshop
								: null || img === "imgKocplay"
								? imgKocplay
								: null
						}
						alt="images"
					/>
				</Zoom>
				<Description />

				<a href={href} target="_blank" rel="noopener noreferrer">
					<span>view project</span>
				</a>

				<div className="right">
					<h1>{number}</h1>
				</div>
			</div>
		</main>
	);
};
