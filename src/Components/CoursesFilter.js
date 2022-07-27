import { useState } from "react";

import {
  useLocation,
  NavLink,
  useSearchParams,
} from "react-router-dom";



function CoursesFilter() {


let [searchParams, setSearchParams] = useSearchParams({ replace: true });


return (
    <>
    <label aria-hidden="true">Filter Courses</label>
            <input
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
    </>
  )
}

function FilteredCourses() {

  const [courses, setCourses] = useState(null);

  function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }

  return (
  <ul>
            {console.log(`courses pre filtered? is: ${courses}`)}
              {courses &&
                courses
                   
                  .filter((filteredCourse) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = filteredCourse.subject_ldesc.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                  })
                  .map((filteredCourse) => (
                    <li key={filteredCourse.subject_code}>
                      <QueryNavLink
                        style={({ isActive }) => {
                          return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                          };
                        }}
                        to={filteredCourse.subject_code}
                      >
                        {filteredCourse.subject_ldesc}
                      </QueryNavLink>
                    </li>
                  ))}
            </ul>
            )
}
