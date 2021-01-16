import React from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

import imgProfile from "../../assets/images/profile2.jpg";
import "./AboutPage.style.scss";

const AboutPage = () => {
	const { t } = useTranslation();

	return (
		<>
			<main className="about">
				<Fade>
					<img src={imgProfile} alt="profile" />
				</Fade>
				<div className="details">
					<Fade bottom>
						<h1>{t("aboutTitle")}</h1>
					</Fade>
					<Fade bottom>
						<p>{t("firstDesc")}</p>
						<p>{t("secondDesc")}</p>
						<p
							dangerouslySetInnerHTML={{ __html: t("thirdDesc") }}
						/>
					</Fade>

					<Fade bottom>
						<h1>{t("tech")}</h1>
						<p className="mt-0">{t("techstack")}</p>
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
