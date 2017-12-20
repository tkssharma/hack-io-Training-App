import React from 'react';

const socialBox = function (props) {

 return (
  <div className="panel intro-panel">
   <div className="panel-header">
    <div className="panel-heading">
     <span className="txt">
      Share your profile page
     </span>
    </div>
   </div>
   <div className="panel-body">
    <ul className="flex-list list-unstyled">
     <li>
      <a
       rel="nofollow"
       href="https://www.facebook.com/sharer/sharer.php?u=https://nextio.io/tarun-sharma"
       target="_blank"
       className="btn full_width btn_facebook">
       <i className="fa fa-facebook"></i>
       Facebook</a>
     </li>
     <li>
      <a
       rel="nofollow"
       href="https://twitter.com/home?status=Tarun's recommendations of the best online programming courses: https://nextio.io/tarun-sharma"
       target="_blank"
       className="btn full_width btn_twitter">
       <i className="fa fa-twitter"></i>
       Twitter</a>
     </li>
    </ul>
   </div>
  </div>
 )
}

export default socialBox;
