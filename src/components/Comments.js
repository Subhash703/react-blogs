import React, { useState } from "react";

export default function Comments({ comments, commentData }) {
	const [isOpen, setIsOpen] = useState(false);

	console.log(commentData);
	const handleClick = (e) => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			{isOpen
				? commentData.map((item) => {
						const { username, comment } = item;
						return (
							<div
								key={Math.floor(Math.random() * 1483524)}
								className="singleComment"
							>
								<div className="username">Comment By {username}</div>
								<p style={{ marginLeft: "20px" }}>&nbsp; {comment}</p>
								<br />
								<hr />
							</div>
						);
				  })
				: null}

			<div onClick={handleClick} className="btn btn-comments">
				{!isOpen ? comments + " Comments" : <p>&times;</p>}
			</div>
		</div>
	);
}
