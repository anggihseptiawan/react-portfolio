import React from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

import "./ContactPage.style.scss";

const ContactPage = () => {
	const { t } = useTranslation();

	return (
		<main className="contact">
			<div className="container">
				<Fade bottom>
					<h1>{t("contactTitle")}</h1>
				</Fade>
				<Fade bottom delay="500">
					<h5>{t("contactSub")}</h5>
				</Fade>
				<Fade bottom delay="800">
					<p>{t("contactText")}</p>
				</Fade>
				<Fade bottom delay="1200">
					<div className="call">
						<div className="mail">
							<p>Email</p>
							<span className="text-teal">
								anggihseptiawan@gmail.com
							</span>
						</div>
						<div className="in">
							<p>LinkedIn</p>
							<span className="text-teal">Anggih Septiawan</span>
						</div>
						<div className="loc">
							<p>Github</p>
							<a
								href="https://github.com/anggihseptiawan"
								className="text-teal"
								target="_blank"
								rel="noopener noreferrer"
							>
								Anggih Septiawan
							</a>
						</div>
					</div>
				</Fade>
			</div>
		</main>
	);
};

export default ContactPage;
