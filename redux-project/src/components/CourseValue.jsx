import React from "react";
import { useSelector } from "react-redux";

function CourseValue() {
  const totalCost= useSelector(({form, courses: {searchTerm, data}}) => {
    const filteredCourses = data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
    let cost = 0;
    for (let course of filteredCourses) {
      cost += course.cost;
    }
    return cost;
    
  });

  return (
    <>
    <div className="coursePrice">Total Price: {totalCost}$</div>
    <a href="https://github.com/cibo-24" className="created">created by cibo-24</a>
    </>
    
  )
}

export default CourseValue;
