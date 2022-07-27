import React from "react";
import DataTable from "react-data-table-component";
import uuid from "react-uuid";
import "./ClassTable.css";

const ExpandedComponent = (section) => {
  return (
    //conditional rendering to avoid displaying if the atribute is missing
    <div key={uuid()} className="class-info-exp">
      <div className="class-info-main">
        {section.data.class_title && (
          <p className="class_title">
            <span>Class Title: </span>
            {section.data.class_title}
          </p>
        )}
        {section.data.instructor && (
          <p className="class_instructor">
            <span>Instructor: </span>
            {section.data.instructor}
          </p>
        )}
        {section.data.component && (
          <p className="class_component">
            <span>Component: </span> {section.data.component}
          </p>
        )}
        {section.data.building && (
          <p className="class_building">
            <span>Building: </span>
            {section.data.building} {section.data.building}
          </p>
        )}
        {section.data.room && (
          <p className="class_room">
            <span>Room: </span> {section.data.room}
          </p>
        )}
        {section.data.days && (
          <p className="class_days">
            <span>Days: </span> {section.data.days}
          </p>
        )}
        {section.data.start_time && (
          <p className="class_start_time">
            <span>Start Time: </span> {section.data.start_time}
          </p>
        )}
        {section.data.end_time && (
          <p className="class_end_time">
            <span>End Time: </span>
            {section.data.end_time}
          </p>
        )}
      </div>
      <div className="class-info-data">
        {section.data.class_section && (
          <p className="class_section">
            <span>Class Section: </span> {section.data.class_section}
          </p>
        )}
        {section.data.course_id && (
          <p className="class_course_id">
            <span>Course ID: </span> {section.data.course_id}
          </p>
        )}
        {section.data.class_number && (
          <p className="class_number">
            <span>Class Number: </span> {section.data.class_number}
          </p>
        )}
        {section.data.seats_total && (
          <p className="class_seats_total">
            <span>Seats Total: </span> {section.data.seats_total}
          </p>
        )}
        {section.data.seats_available && (
          <p className="class_available">
            <span>Seats Available: </span> {section.data.seats_available}
          </p>
        )}
      </div>
      <div className="class-info-other">
        {section.data.ge_grad_req && (
          <p className="class_attributes">
            <span>Class atributes: </span> {section.data.ge_grad_req}
          </p>
        )}
        {section.data.class_meeting_start_date && (
          <p className="class_meeting_start_date">
            <span>Class Meeting Start Date: </span>{" "}
            {section.data.class_meeting_start_date}
          </p>
        )}
        {section.data.class_meeting_end_date && (
          <p className="class_meeting_end_date">
            <span>Class Meeting End Date: </span>{" "}
            {section.data.class_meeting_end_date}
          </p>
        )}
      </div>
    </div>
  );
};

export default function ClassTable({ section }) {
  const handleClick = () => {
    console.log(section.sections);
  };
  const columns = [
    {
      name: "Seats available",
      type: "",
      hide: "sm",
      sortable: "true",
      center: "true",
      compact: "true",
      selector: (row) => row.seats_available
    },
    {
      name: "Instructor",
      type: "",
      hide: "sm",
      wrap: "true",
      selector: (row) => row.instructor
    },
    {
      name: "Building",
      type: "",
      hide: "sm",
      center: "true",
      selector: (row) => row.building
    },
    {
      name: "Days",
      type: "",
      sortable: "true",
      center: "true",
      selector: (row) => row.days
    },
    {
      name: "Start Time",
      type: "",
      sortable: "true",
      hide: "lg",
      center: "true",
      selector: (row) => row.start_time
    },
    {
      name: "End Time",
      type: "",
      hide: 1200,
      sortable: "true",
      center: "true",
      selector: (row) => row.end_time
    }
  ];
  const rows = section.sections;
  return (
    <>
      <div className="table" key={uuid()}>
        <h2
          id={section.subject_code + "-" + section.catalog_number}
          onClick={handleClick}
        >
          {section.subject_code +
            " " +
            section.catalog_number +
            " - " +
            section.class_title +
            " - " +
            section.units +
            " Units"}
        </h2>
        <p>{section.class_ldesc}</p>
        <DataTable
          columns={columns}
          data={rows}
          sm
          expandableRows
          fixedHeader
          compact
          selectableRowsHighlight
          expandableRowsComponent={(e) => ExpandedComponent(e, rows)}
        />
      </div>
    </>
  );
}
