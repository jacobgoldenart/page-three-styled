import "./semesters.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TermsContext } from "../App";

function Semesters() {
	const terms = useContext(TermsContext);

	return (
		<div className="page-schedule-home">
			<article id="skip">
				<h2 id="article-head" aria-hidden="true">
					Available Schedules
				</h2>
				<ul aria-labelledby="article-head">
					{terms.map((term) => (
						<li key={term.term}>
							{/* <Link to={`${term.term_ldesc.toLowerCase().replace(/ /g, "_")}`}  */}
							<Link
								to={`${term.term}`}
								state={{ all_terms: terms, term_desc: term.term_ldesc }}
							>
								{term.term_ldesc}
							</Link>
						</li>
					))}
				</ul>
			</article>
		</div>
	);
}

export default Semesters;
