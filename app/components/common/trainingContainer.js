import React from 'react'
import SocialShare from './socialShare';

const TrainingContainer = (props) => {

    return (
        <div className="container alt">
            <div className="row">
                <div className="col-xs-12 no-padding">
                    <div className="flex-container profile-container">
                        <div className="main-content  col-sm-12">

                            <div className="flex-container">
                                <div className="main--content col-xs-12 col-sm-12 col-md-8 no-padding">
                                    <div className="js-tutorial-listing-content">
                                        <div>
                                            <div className="tutorial-listing-wrapper">
                                                <div className="tutorial-listing">
                                                    <div className="tut-list tut-row">
                                                        <div className="tut-list-primary">
                                                            <div className="tut-vote">
                                                                <img className="tut-icon" src="http://pbs.twimg.com/profile_images/745934492553084933/bOysDVFn_normal.jpg" />
                                                            </div>
                                                            <div className="tut-title">
                                                                <div className="title">
                                                                    <div className="title-links no-margin">
                                                                        <a href="https://hackr.io/tutorial/dive-into-html5-by-mark-pilgrim" className="js-tutorial-title"
                                                                            data-tutorialid="7">
                                                                            <span className="tutorial-title-txt">Dive Into HTML5 by Mark Pilgrim</span>
                                                                        </a>
                                                                        <span className="tut-title-link">
                                                                            <a rel="nofollow" href="http://diveintohtml5.info/" className="js-tutorial" data-id="7"
                                                                                target="_blank">(diveintohtml5.info)</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="action-footer">
                                                                    <div className="tut-footer-actions">
                                                                        <div className="action comments comments-tooltip">
                                                                            <a href="javascript:void(0);" className="btn js-details" data-tutorial="Dive Into HTML5 by Mark Pilgrim"
                                                                                data-topic="HTML 5">
                                                                                <i className="js-details-icon tut-footer-action-chevron ion-arrow-down-b"></i>
                                                                            </a>
                                                                        </div>
                                                                        <div data-position="top" data-hintid="1" data-hint="You can save tutorials for future reference. They'll be saved to your profile page."
                                                                            className="action save">
                                                                            <a href="javascript:void(0);" data-url="https://hackr.io/tutorial/dive-into-html5-by-mark-pilgrim/save"
                                                                                className="btn save-btn js-save-btn">Save</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="action author">
                                                                        <a href="https://hackr.io/gaurav-gupta">Gaurav Gupta</a>
                                                                    </div>
                                                                    <div className="tut-label-group">
                                                                        <span className="tag-tooltip" data-toggle="popover" data-trigger="hover" data-placement="top"
                                                                            data-content="This is a free tutorial" data-original-title="" title="">
                                                                            <span className="label label-xs label-success">Free</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tut-list-secondary">
                                                            <div className="section-one-liner js_one_liner_main" data-url="https://hackr.io/tutorial/dive-into-html5-by-mark-pilgrim/granulars">
                                                                <div className="tutorial-loader">
                                                                    <i className="ion-load-c"></i>
                                                                </div>
                                                            </div>
                                                        </div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <SocialShare  openTraining={props.openTraining}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default TrainingContainer;