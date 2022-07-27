import ClassTable from "../Components/ClassTable";
import "./CourseDetails.css";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { TermsContext } from "../App";
import useFetch from "../Components/utils/useFetch";
import uuid from "react-uuid";

function CourseDetails() {
	const [termData, setTermData] = useState();
	const terms = useContext(TermsContext);
	let location = useLocation();
	const { get } = useFetch();

	useEffect(() => {
		// get(`${location.pathname.slice(16)}`).then((data) => {
		get(`${location.pathname}`).then((data) => {
			setTermData(data);
		});
	}, [location]);

	return (
		<div className="page-schedule-details">
			<article id="skip">
				<section>
					<div className="toc-header">
						<h1>Subject Name</h1>
						<p>All Courses in [SubjectName] available in term</p>
					</div>
				</section>
				<aside className="side-nav">
					<h3 aria-hidden>Jump to Course</h3>
					<ul className="toc-wrapper">
						{termData &&
							termData.map((item) => (
								<li key={uuid()} className="toc-card">
									<a href={"#" + item.subject_code + "-" + item.catalog_number}>
										{item.subject_code + " " + item.catalog_number}
									</a>
								</li>
							))}
					</ul>
				</aside>

				<section>
					{/* Table here */}
					<div className="table-section">
						{termData && termData.map((item) => <ClassTable section={item} />)}
					</div>
					<footer>
						<div className="legend">
							<h2>Legend</h2>
							<ul>
								<li>
									<span>
										<img
											src="http://www.csus.edu/dev/class_schedule/book-icon-big.png"
											alt="Book Legend Icon"
										/>
									</span>
									The icon links you to the identified course materials list.
								</li>
								<li>
									<span>
										<img
											src="http://www.csus.edu/dev/class_schedule/low-cost-book-icon-big.png"
											alt="Low Cost Course Materials Legend Icon"
										/>
									</span>
									This course has been identified as having total course
									material costs under $40.00. Costs are determined by the
									campus affiliated book store. Availability of low cost
									materials may be limited to bookstore availability.
								</li>
								<li>
									<span>
										<img
											src="http://www.csus.edu/dev/class_schedule/zero-cost-book-icon-big.png"
											alt="Zero Cost Course Materials Legend Icon"
										/>
									</span>
									This course has been identified as having Zero cost course
									materials.
								</li>
							</ul>
						</div>
						<div className="attributes">
							<h2>Class Attribute Codes</h2>
							<ul>
								<li>
									<span>HY</span>Hybrid (OnLine & In-Person Meetings)
								</li>
								<li>
									<span>I</span>Service Learning Internship
								</li>
								<li>
									<span>OL</span>Online
								</li>
							</ul>
						</div>
						<div className="session">
							<h2>Session Codes</h2>
							<ul>
								<li>
									<span>1</span>Regular Academic Session (01/24/2022 to
									05/13/2022)
								</li>
								<li>
									<span>SNS</span>Self Support Nonstandard Dates (01/24/2022 to
									05/22/2022)
								</li>
							</ul>
						</div>
					</footer>
				</section>
			</article>
		</div>
	);
}

export default CourseDetails;
