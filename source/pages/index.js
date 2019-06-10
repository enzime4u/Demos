import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Calendar from "./Calendar";

const Home = () => (
	<div style={{ padding: "4rem" }}>
		<h1>Main menu</h1>
		<ul>
			<li>
				<Link to="calendar">Calendar</Link>
			</li>
			<li>...more to come</li>
		</ul>
	</div>
);

export default (
	<Router>
		<Home path="/" />
		<Calendar path="/calendar" />
	</Router>
);
