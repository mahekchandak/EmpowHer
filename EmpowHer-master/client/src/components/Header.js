/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://play-lh.googleusercontent.com/tAsMemeCgGqXOzjSbwLv-5oUqpPAmD11CBbU_nhjtKFOjdEnbmuxpwajKmiO8Trrd4k"
				/>
                <h1 className="website-name">EmpowHer</h1>
			</div>
			<div className="nav-items">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/period-tracker">Period Tracker</Link></li>
					<li><Link to="/workouts">Workouts</Link></li>
                    <li><Link>Blogs</Link></li>
					<li><Link to="/pcos">PCOS Detection</Link></li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
