'use strict';

import React from 'react';
const courseListItem = (props) => {
 return (
  <div className="grid-col data-grid grid-col-1 topic-grid">
   <div className="topic-grid-item js-topic-grid-item">
    <a>
     <div>
     <a href="" onClick={(e) => props.openCourse(props.data,e)}  rel="noopener noreferrer">{props.data}</a>
     </div>
    </a>
   </div>
  </div>
 )
}

export default courseListItem;
