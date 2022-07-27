import { useLayoutEffect } from "react";

export default function Header() {
	function hidden() {
		// This is temporary. It has a hidden attr in the original
		//code that wasn't firing
		const pm = document.querySelector("#primary-navigation");
		pm.setAttribute("hidden", "");
	}

	useLayoutEffect(() => {
		hidden();
	}, []);

	return (
		<>
			<div role="banner">
				<h1 aria-hidden="true" className="d-none">
					California State University, Sacramento
				</h1>
				<nav
					aria-labelledby="primary-navigation"
					className="navbar"
					id="csus-global-navbar"
				>
					<h2 hidden="" id="primary-navigation">
						Primary Navigation
					</h2>
					<div className="container">
						<a className="navbar-brand" href="https://www.tst.csus.edu">
							{" "}
							<img
								alt="Sac State logo"
								src="https://www.tst.csus.edu/newcsus2019-global-assets/_internal/svg/csulogo.svg"
							/>{" "}
						</a>
						<a
							href="https://www.tst.csus.edu/apply/index.html"
							className="button-cta"
						>
							Register For Classes
						</a>
					</div>
				</nav>
			</div>
		</>
	);
}
