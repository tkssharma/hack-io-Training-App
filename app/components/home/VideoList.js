import React, {Component} from 'react';

const VideoList = props => {
  return (
   <div className="row">
    <div className="col-xs-12 no-paddingright-desktop">
     <div className="page--body">
      <div className="flex-grid next--flex-grid home--flex-grid js-topics-list">

       <div className="grid-col data-grid grid-col-1 topic-grid">
        <a
         href="https://next.io/tutorials/learn-android-development"
         data-alias=""
         className="topic-grid-item js-topic-grid-item">
         <img
          className="topic-thumbnail"
          src="https://next.io/tutorials/learn-android-development/svg/android-development_logo"
          alt=""/>
         <p className="js-topic">React Development</p>
        </a>
       </div>
       <div className="grid-col data-grid grid-col-1 topic-grid">
        <a
         href="https://next.io/tutorials/learn-android-development"
         data-alias=""
         className="topic-grid-item js-topic-grid-item">
         <img
          className="topic-thumbnail"
          src="https://next.io/tutorials/learn-android-development/svg/android-development_logo"
          alt=""/>
         <p className="js-topic">Angular JS Development</p>
        </a>
       </div>
       <div className="grid-col data-grid grid-col-1 topic-grid">
        <a
         href="https://next.io/tutorials/learn-android-development"
         data-alias=""
         className="topic-grid-item js-topic-grid-item">
         <img
          className="topic-thumbnail"
          src="https://next.io/tutorials/learn-android-development/svg/android-development_logo"
          alt=""/>
         <p className="js-topic">Node Development</p>
        </a>
       </div>
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

export default VideoList;
