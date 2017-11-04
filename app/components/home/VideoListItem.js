'use strict';

import React from 'react';
const VideoListItem = (props) => {
 return (

  <div className="grid-col data-grid grid-col-1 topic-grid">
   <div className="topic-grid-item js-topic-grid-item">
    <a>
     <div>
      {props.data.Thumbnails[0].FullURL
       ? (<img className="video_image" src={props.data.Thumbnails[0].FullURL}/>)
       : (<div/>)}
     </div>
    </a>
    <a href="">
     <p className="js-topic">{props.data.Title}</p>
    </a>
   </div>
  </div>
 )
}

export default VideoListItem;
