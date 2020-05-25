import React from 'react';
import './style.css';

class Headernav extends React.Component {
	render() {
		return <div>
	<header>
		<h1>
			<div id="tittle" class="header" align="center">Message List</div>
		</h1>
		<div class="navbar-toggle">
				<a class = "active" href="index.html">Home</a>
				<a href="https://blogs.ubc.ca/cpsc436i2020s/">Course</a>
				<a href="about.html">About</a>
		</div>
	</header>
	</div>

	}
}

export default Headernav;