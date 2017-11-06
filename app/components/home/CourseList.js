import React, {Component} from 'react';
import  CourseListItem from './CourseListItem';

const CourseList = props => {
  const list = props.courseData.map(function(_course){
    return (<CourseListItem openCourse={props.openCourseData} data={_course} key={_course} />)
  })
  return (
   <div className="row">
    <div className="col-xs-12 no-paddingright-desktop">
     <div className="page--body">
      <div className="flex-grid next--flex-grid home--flex-grid js-topics-list">
      { list}
      </div>
      <div id="no_topics_found" className="col-md-12 text-center hidden">
       <em>Sorry, no results found!</em>
      </div>
     </div>
    </div>
    <div className="clearfix"></div>
   </div>
  );
 }

export default CourseList;
