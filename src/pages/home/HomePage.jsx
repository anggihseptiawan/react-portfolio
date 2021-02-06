import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { ProjectComponent } from "../../components/project/project.component";
import "./HomePage.style.scss";

const HomePage = () => {
	const { t } = useTranslation();

	return (
		<main className="home">
			<div className="container">
				<header className="hero-section">
					<Fade bottom cascade>
						<h1 className="top">{t("firstTitle")}</h1>
						<h1 className="middle">{t("secondTitle")}</h1>
						<h1 className="bottom">{t("thirdTitle")}</h1>
					</Fade>

					<Fade delay="1000">
						<p
							className="tagline"
							dangerouslySetInnerHTML={{ __html: t("subtitle") }}
						/>
					</Fade>
				</header>
			</div>
			<ProjectComponent
				className="project_one"
				title="LENOVO LEGION"
				img="imgLenovo"
				href="https://legion.lenovo.com"
				number="01"
			/>
			<ProjectComponent
				className="project_two"
				title="CLOTHSHOP"
				img="imgClothshop"
				href="https://clothing-shop.vercel.app/"
				number="02"
			/>
			<ProjectComponent
				className="project_three"
				title="NEWS PORTAL"
				img="imgKS"
				href="https://kabarsukabumi.com/"
				number="03"
			/>

			<div className="more">
				<Link to="/about">
					<Fade bottom cascade delay="500">
						<h1>{t("more")}</h1>
					</Fade>
				</Link>
			</div>
		</main>
	);
};

export default HomePage;
