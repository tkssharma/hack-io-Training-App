import React from 'react';

const profileHeader = function (props) {

 return (
  <div className="page--section-header profile--header">
   <div className="container alt no-padding">
    <div className="row">
     <div className="col-xs-12">
      <div className="page--section-heading fx fd-col-mob fx-wrap fx--ai-c fx--jc-fs">
       <div className="profile-img"></div>
       <div className="profile-info">
        <h1 className="profile-title">Tarun Sharma</h1>
        <p className="desc"></p>
        <div className="page--section-subheading">Member Since: October, 2017</div>
       </div>
       <div className="profile-actions">
        <div className="repo-sec">
         <div className="repo-panel">
          <div className="repo-title">
           <span className="txt">Reputation
            <a href="javascript:void(0);"></a>
           </span>
          </div>
          <div className="repo-points">10</div>
         </div>
         <div className="repo-panel margintop-md">
          <div className="repo-title">
           <span className="txt">Badge Tally
            <a title="">
             <i className="fa fa-info-circle"></i>
            </a>
           </span>
          </div>
          <div className="repo-block fx fx--jc-fe">
           <div className="repo-points with-icon gold" title="0  gold badge  ">
            <i className="icon ion-ribbon-b"></i>0</div>
           <div className="repo-points with-icon silver" title="0  silver badge  ">
            <i className="icon ion-ribbon-b"></i>0</div>
           <div className="repo-points with-icon bronze" title="0  bronze badge  ">
            <i className="icon ion-ribbon-b"></i>0</div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default profileHeader;