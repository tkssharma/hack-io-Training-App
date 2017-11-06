import React, {Component} from 'react';
import PropTypes from 'prop-types';

const LearningHeading = (props) =>{
  return (<div className="learning-wrapper">
   <div className="page--section-header tutorial--tut-title">
    <div className="container alt">
     <div className="row">
      <div className="col-xs-12">
       <div
        className="page--section-heading tut-section-heading fx wrap-mob fx-wrap fx--ai-fs fx--jc-fs">
        <div className="category-header-wrapper-mobile">
         <div className="category-header">
          <img
           src="https://hackr.io/tutorials/learn-html-5/svg/html-5_logo"
           alt="Learn HTML 5 from the best HTML 5 tutorials/courses online."
           className="tut-icon" />
           <div className="tut-info">
            <h1 className="tut-title">HTML 5 Tutorials and Courses</h1>
            <div className="tut-description hidden-xs">
             <p className="page--section-subheading">Learn HTML5 online from the best HTML
              tutorials submitted &amp; voted by the programming community.</p>
             <div className="share-hackr">
              <a
               className="share-btn no-count  share-facebook js-social-share-btn"
               data-social="Facebook">
               <i className="icon ion-social-facebook"></i>
               <span className="txt">Share</span>
              </a>
              <a
               className="share-btn no-count share-twitter js-social-share-btn"
               data-social="Twitter">
               <i className="icon ion-social-twitter"></i>
               <span className="txt">Tweet</span>
              </a>
              <a
               className="share-btn share-linkedin no-count js-social-share-btn"
               data-social="LinkedIn">
               <i className="icon ion-social-linkedin"></i>
               <span className="txt">Share</span>
              </a>
             </div>
            </div>
           </div>
          </div>
          <div className="tut-description visible-xs">
           <p className="page--section-subheading">Learn HTML5 online from the best HTML
            tutorials submitted &amp; voted by the programming community.</p>
           <div className="share-hackr">
            <a data-social="Facebook">
             <i className="icon ion-social-facebook"></i>
             <span className="txt">Share</span>
            </a>
            <a
             className="share-btn no-count share-twitter js-social-share-btn"
             data-social="Twitter">
             <i className="icon ion-social-twitter"></i>
             <span className="txt">Tweet</span>
            </a>
            <a
             className="share-btn share-linkedin no-count js-social-share-btn"
             data-social="LinkedIn">
             <i className="icon ion-social-linkedin"></i>
             <span className="txt">Share</span>
            </a>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>

<div className="page--section-body tutorial--tut-list">
<div className="container alt">
 <div className="row">
  <div className="col-xs-12 container-top-tut">

   <div className="cta-tut-filter visible-xs visible-sm">
    <a href="#" className="open-tut-filters">FILTERS</a>
   </div>
   <div className="flex-container">
    <div className="main--content col-xs-12 col-sm-12 col-md-9 no-padding">
     <div className="js-tutorial-listing-content">
      <div className="main-content border">
       <div className="top-tut-container">
        <p className="top-tut-title">Top tutorials</p>
        <div className="top-tut-filters">
         <button className="top-tut-selection  selection-active  js-sort-btn" data-sort="upvotes">Upvotes</button>
         <button className="top-tut-selection   js-sort-btn marginright-md" data-sort="recent">Recent</button>
        </div>
       </div>

       <div className="tutorial-listing-wrapper">
        <div className="tutorial-listing">
         <div className="tut-list tut-row">

          <div className="tut-list-primary">
           <div className="tut-vote">
            <a href="javascript:void(0)" className="vote-widget js-tutorial-upvote" data-url="https://hackr.io/tutorial/dive-into-html5-by-mark-pilgrim/vote" data-id="7">
     <span className="arrow"><i className="ion-arrow-up-b"></i></span>
     <span className="count">40</span>
    </a>
           </div>
           <div className="tut-title">
            <div className="title">
             <div className="title-links no-margin">
              <a href="https://hackr.io/tutorial/dive-into-html5-by-mark-pilgrim" className="js-tutorial-title" data-tutorialid="7">
      <span className="tutorial-title-txt">Dive Into HTML5 by Mark Pilgrim</span></a>
              <span className="tut-title-link">
             <a rel="nofollow" href="http://diveintohtml5.info/" className="js-tutorial" data-id="7" target="_blank">(diveintohtml5.info)</a>
           </span>
             </div>
            </div>
            <div className="action-footer">
             <div className="tut-footer-actions">

              <div className="action comments comments-tooltip"><a href="javascript:void(0);" className="btn js-details" data-tutorial="Dive Into HTML5 by Mark Pilgrim"
                data-topic="HTML 5">Details&nbsp;<i className="js-details-icon tut-footer-action-chevron ion-arrow-down-b"></i></a>
              </div>
              <div data-position="top" data-hintid="1" data-hint="You can save tutorials for future reference. They'll be saved to your profile page."
               className="action save">
               <a href="javascript:void(0);" data-url="https://hackr.io/tutorial/dive-into-html5-by-mark-pilgrim/save" className="btn save-btn js-save-btn">
                  Save
              </a>
              </div>

             </div>
             <div className="action author">Submitted by
              <a href="https://hackr.io/gaurav-gupta">Gaurav Gupta</a>
             </div>

             <div className="tut-label-group">
              <span className="tag-tooltip"  data-toggle="popover" data-trigger="hover" data-placement="top"
               data-content="This is a free tutorial" data-original-title="" title="">
        <span className="label label-xs label-success">Free</span>
              </span>
             </div>

            </div>
           </div>
          </div>
          <div className="tut-list-secondary">
           <div className="section-one-liner js_one_liner_main" data-url="https://hackr.io/tutorial/dive-into-html5-by-mark-pilgrim/granulars">
            <div className="tutorial-loader" >
             <i className="ion-load-c"></i>
            </div>
           </div>
          </div>
         </div>
        </div>

       </div>

      </div>

     </div>
    </div>
   </div>
  </div>
 </div>
</div>
</div>
</div>
  );
 }

 export default LearningHeading;