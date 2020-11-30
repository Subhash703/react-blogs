import "./App.css";
import Header from "./components/Header";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";

class App extends Component {
	render() {
		return (
			<div className="container-wrapper">
				<Header />
				<Route path="/" exact component={Posts} />
			</div>
		);
	}
}

export default App;
