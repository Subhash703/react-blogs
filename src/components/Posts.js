import React, { useState } from "react";
import Post from "./Post";
import { data } from "../data";

const Posts = () => {
	// alert(data.length);

	// console.log(post);
	return (
		<div className="posts">
			{data.map((element) => {
				return <Post key={element.userId} postData={element} />;
			})}
		</div>
	);
};

export default Posts;
