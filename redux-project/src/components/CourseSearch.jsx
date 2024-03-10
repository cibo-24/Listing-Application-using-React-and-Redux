import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store/slices/courseSlice';


function CourseSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
   return state.courses.searchTerm
  });

  return (
    <div className='listHeader'>
      <h3 className='title is-3'>My Course</h3>
      <div className='search field is-horizontal'>
        <label className='label'>Search</label>
        <input value={searchTerm} className='input' onChange={(e) => {
          dispatch(changeSearchTerm(e.target.value))
        }}/>
      </div>
    </div>
  )
}

export default CourseSearch