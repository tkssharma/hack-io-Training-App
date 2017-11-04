'use strict';

import {COURSE_LOAD, COURSE_LOAD_SUCCESS} from 'app/redux/constants';

import Immutable from 'immutable';

const COURSE_default_data = {courseData: [] , loaded : false }
function loadCourse(course = COURSE_default_data, action) {

 if (action.type === COURSE_LOAD_SUCCESS) {
   // using spread operator
  return { ...course, courseData: action.payload.data ,loaded : true }
   // return Object.assign({},courses,{courseData : action.payload.data})
 }else {
  return  course;
 }
}

export default loadCourse;
