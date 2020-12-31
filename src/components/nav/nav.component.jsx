import React, { useState, useRef } from "react";
import "./nav.style.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Nav = () => {
	const [toggleHidden, setToggleHidden] = useState(true);
	const nav = useRef(null);

	const handleNav = () => {
		setToggleHidden(!toggleHidden);
	};

	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 10) {
			if (nav.current !== null) {
				nav.current.classList.add("fixed");
			}
		} else {
			if (nav.current !== null) {
				nav.current.classList.remove("fixed");
			}
		}
	});

	return (
		<div className="navbar" ref={nav}>
			<div className="container">
				<Fade delay="1500">
					<div className="brand">
						<span className="text-teal">asdevv.</span>
					</div>
					<div
						className={
							toggleHidden === true ? "toggle" : "toggle active"
						}
						onClick={handleNav}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</Fade>
			</div>

			{toggleHidden === true ? null : (
				<Zoom>
					<div className="link">
						<Fade bottom delay="500">
							<Link to="/" onClick={handleNav}>
								HOME
							</Link>
						</Fade>
						<Fade bottom delay="800">
							<Link to="/about" onClick={handleNav}>
								ABOUT
							</Link>
						</Fade>
						<Fade bottom delay="1000">
							<Link to="/contact" onClick={handleNav}>
								CONTACT
							</Link>
						</Fade>
					</div>
				</Zoom>
			)}
		</div>
	);
};

export default Nav;
