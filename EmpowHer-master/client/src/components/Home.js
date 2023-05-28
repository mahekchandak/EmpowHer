import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const handleScroll = (e) => {
		e.preventDefault();
		document.querySelector(e.target.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<>
			<div className="home-container">
				<section className="title-section">
					<h1>Welcome to EmpowHer</h1>
					<p>Your Personal Period Tracking and Women's Health Companion</p>
					<a
						href="#about"
						onClick={handleScroll}
						type="button"
						className="cta-button"
					>
						Get Started
					</a>
				</section>

				<section id="about" className="about-section">
					<h2>About EmpowHer</h2>
					<p>
						EmpowHer is a comprehensive period tracking and women's health
						platform designed to empower women by providing valuable insights,
						tips, and support for their menstrual health journey.
					</p>
				</section>

				<section id="features" className="features-section">
					<h2>Key Features</h2>
					<div className="feature-card">
						<Link to="/period-tracker">
							<img
								src="https://www.womanlog.com/img/products/womanlog_key_features_1.svg"
								alt="Feature 1"
							/>
							<h3>Accurate Period Tracking</h3>
							<p>
								Track your menstrual cycle with precision and receive
								notifications for upcoming periods and fertile windows.
							</p>
						</Link>
					</div>
					<div className="feature-card">
						<Link to="/pcos">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mxLlVwLFwcgKIx-RMtHtoDkRAEU1Wp56vkqF7hyIYPqm75TfrvFmEfkXuZIS-kYn1S0J1-loScY&usqp=CAU&ec=48665701"
							alt="Feature 2"
						/>
						<h3>Insights and Analysis</h3>
						<p>
							Track your periods, Take the PCOS test, and get insights into your
							menstrual health.
						</p>
						</Link>
					</div>
					<div className="feature-card">
						<Link to="/workouts">
						<img
							src="https://icon-library.com/images/workout-icon/workout-icon-10.jpg"
							alt="Feature 3"
						/>
						<h3>Personalized Tips</h3>
						<p>
							Receive personalized tips, exercises, and self-care
							recommendations based on your menstrual health data.
						</p>
						</Link>
					</div>
				</section>

				<section id="sign-up" className="cta-section">
					<h2>Start Empowering Yourself Today</h2>
					<p>
						Join thousands of women who are already benefiting from EmpowHer's
						powerful period tracking and women's health features.
					</p>
					<button className="cta-button">Sign Up Now</button>
				</section>
			</div>
			<footer className="footer-section">
				<p>&copy; 2023 EmpowHer. All rights reserved.</p>
			</footer>
		</>
	);
};

export default Home;
