import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<div className="container-header">
				<h1>My Awesome Posting Site!</h1>
				<div className="buttons">
					<div className="btn btn-login">Login</div>
					<div className="btn btn-signup">Signup</div>
				</div>
			</div>
		);
	}
}

export default Header;
