import React, { Component } from "react";

export const Footer = () => {
	return (
	<div className="my-5">
		<footer className="text-center text-lg-start bg-dark">
			<div className="container d-flex justify-content-center py-5">
				<button type="button" className="btn btn-secondary btn-lg btn-floating mx-2">
					<i className="fas fa-jedi"></i>
				</button>
				<button type="button" className="btn btn-secondary btn-lg btn-floating mx-2 ">
					<i className="fab fa-galactic-republic"></i>
				</button>
			</div>

			<div className="text-center text-white p-3" >
				Star Wars Guide
			</div>
		</footer>
	</div>
	)
};
