import React from "react";
import {  useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();

  const {courses}= useSelector(({form, courses: {searchTerm, data}}) => {
    // includes = içeriyorsa
    const filteredCourses = data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return {
      courses: filteredCourses,
    }
  });

  const renderedCourses = courses.map((course) => {
    return (
      <div key={course.id} className="panel">
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}$</p>
        <button onClick={() => {
          dispatch(removeCourse(course.id))
        }} className="button is-danger">Delete</button>
      </div>
    );
  })

  return (
    <div className="courseList">
      {renderedCourses}
    </div>
  );
}

export default CourseList;
