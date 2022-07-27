import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs();

	return (
		<>
			<header className="bg-image-full">
				<div>
					<h2>
						<span>Dynamic Page Title</span>
					</h2>
				</div>
			</header>
			<aside className="breadcrumb">
				<ul>
					{breadcrumbs.slice(1).map(({ match, breadcrumb }) => (
						<li key={match.pathname}>
							<NavLink to={match.pathname}>{breadcrumb}</NavLink>
						</li>
					))}
				</ul>
			</aside>
		</>
	);
};

export default Breadcrumbs;
