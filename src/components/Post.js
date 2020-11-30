import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Comments from "./Comments";

export default function Post({ postData }) {
	// console.log(postData);

	const { userId, userPosts } = postData;

	return (
		<>
			{userPosts.map((element) => {
				const { post_id, title, body, commentData } = element;
				return (
					<div
						key={userId + post_id + Math.floor(Math.random() * 100000)}
						className="post-wrapper"
					>
						<div className="post-data">
							<h2 className="post_title">{title}</h2>

							<div className="post_body">
								<p>{body}</p>
							</div>
							<Comments
								comments={commentData.length}
								commentData={commentData}
							/>
						</div>
						<div className="post-info">
							<p>Submitted by {userId}</p>
						</div>
					</div>
				);
			})}
		</>
	);
}
