import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import imgLenovo from "../../assets/images/pro_1.png";
import imgKS from "../../assets/images/ks.png";
import imgClothshop from "../../assets/images/pro_4.png";
import "./project.style.scss";

export const ProjectComponent = ({ className, title, img, href, number }) => {
	const Description = () => {
		if (img === "imgLenovo") {
			return (
				<div className="desc container">
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
				<div className="desc container">
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
				<div className="desc container">
					<p>
						Some freelance project with my friend, build in june
						2020
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
					<div className="container">
						<h3 className="title">{title}</h3>
					</div>
				</Fade>
				<Zoom duration="2000">
					<img
						src={
							img === "imgLenovo"
								? imgLenovo
								: null || img === "imgClothshop"
								? imgClothshop
								: null || img === "imgKS"
								? imgKS
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
