import { useState, useEffect, useContext } from "react";

import "./AllCourses.css";
import {
	useNavigate,
	useLocation,
	NavLink,
	useParams,
	useSearchParams
} from "react-router-dom";
import { TermsContext } from "../App";
import useFetch from "../Components/utils/useFetch";

function AllCourses() {
	const [groupedCourses, setGroupedCourses] = useState([]);
	const [coursesData, setCoursesData] = useState([]);
	const { get } = useFetch();
	const termsLinks = useContext(TermsContext);
	const navigate = useNavigate();

	let [searchParams, setSearchParams] = useSearchParams({ replace: true });
	let { id } = useParams();
	let location = useLocation();

	// useEffect1
	useEffect(() => {
		get(`${id}`).then((data) => {
			setCoursesData(data);
		});
	}, [location]);

	// useEffect2
	useEffect(() => {
		// This reducer groups the course by alpha

		const results = coursesData.reduce((r, e) => {
			// get first letter of name of current element
			let alpha = e.subject_ldesc[0];

			// if there is no property in accumulator with this letter create it
			if (!r[alpha]) r[alpha] = { alpha, courses: [e] };
			// if there is push current element to children array for that letter
			else r[alpha].courses.push(e);

			// return accumulator

			return r;
		}, {});

		setGroupedCourses(Object.values(results));
	}, [coursesData]);

	// Build Links for each course
	function QueryNavLink({ to, ...props }) {
		return <NavLink to={to + location.search} {...props} />;
	}

	function handleTermChange(e) {
		// Todo on change Load JSON for specific term (based on pathname)
		// and re render content
		const changeTerm = e.target.value;
		navigate(`/class-schedule/${changeTerm}`);
	}

	return (
		<>
			{" "}
			{/* update with dynamic terms */}
			<div className="page-schedule-term spring">
				<article>
					<h2 id="article-head" aria-hidden="true">
						{/* update with dynamic terms */}
						Class Schedule For Spring 2022
					</h2>
					<form className="search-catalog">
						{/* minimal application: additional markup and a11y needed */}
						<fieldset>
							<label aria-hidden="true">Filter Courses by Major</label>
							<input
								type="text"
								placeholder="Filter Courses"
								value={searchParams.get("filter") || ""}
								onChange={(event) => {
									let filter = event.target.value;
									if (filter) {
										setSearchParams({ filter }, { replace: true });
									} else {
										setSearchParams({}, { replace: true });
									}
								}}
							/>
							<select onChange={handleTermChange} defaultValue="">
								<option value="" disabled>
									Select Another Term...
								</option>
								{termsLinks.map((termLink) => (
									<option key={termLink.term} value={termLink.term}>
										{termLink.term_ldesc}
									</option>
								))}
							</select>
						</fieldset>
					</form>

					<section>
						{groupedCourses
							// Sort Array by Alpha
							.sort((a, b) => a.alpha.localeCompare(b.alpha))
							// Compare and filter Courses
							.filter((filteredAlpha) => {
								let Alphafilter = searchParams.get("filter");
								if (!Alphafilter) return true;
								let letter = filteredAlpha.alpha.substring(0, 1).toLowerCase();
								return letter.startsWith(
									Alphafilter.substring(0, 1).toLowerCase()
								);
								// map over and build the html for filtererd results
							})
							.map((groupedCourse) => {
								return (
									<div>
										<h3>{groupedCourse.alpha}</h3>
										<ul>
											{groupedCourse.courses
												.filter((filteredCourse) => {
													let filter = searchParams.get("filter");
													if (!filter) return true;
													let course = filteredCourse.subject_ldesc.toLowerCase();
													return course.startsWith(filter.toLowerCase());
												})
												.map((course) => {
													return (
														<li key={course.subject_code} className="box">
															{/* This creates a link for the subject_code */}
															<QueryNavLink to={course.subject_code}>
																{course.subject_ldesc}
															</QueryNavLink>
														</li>
													);
												})}
										</ul>
									</div>
								);
							})}
					</section>
				</article>
			</div>
		</>
	);
}

export default AllCourses;
