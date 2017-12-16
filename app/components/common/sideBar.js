import React from 'react'

const sideBar = (props) => {
    return (

        <div
            className="sidebar-content tutorial-filters col-md-3 no-paddingright hidden-xs hidden-sm">
            <div className="panel intro-panel panel-primary mentor-panel">
                <div className="panel-header">
                    <div className="panel-heading">
                        <span className="txt">Looking for Mentor?</span>
                    </div>
                </div>
                <div className="panel-body">
                    <p>Ask any Angular question(s) from an experienced Angular mentor. Rs 500 for 30
                        mins. Face to face video call.</p>
                    <a
                        href="https://next.io/connect-to-mentor"
                        className="btn btn-primary js-connect-mentor">Connect me with a Mentor</a>
                    <a href="javascript:void(0);" className="link-default js-join-mentor">Want to join as a Mentor?</a>

                    <div className="mentor-message">
                        <p className="no-margin">Hello,</p>
                        <p>Thanks for your interest in being a Mentor. Please send your resume to
                            <span className="email">saurabh@next.io</span>
                            and we will get in touch with you shortly.</p>
                    </div>
                </div>
            </div>

            <div
                data-position="top"
                data-hintid="2"
                data-hint="Find the tutorial you are looking for faster using the filters."
                className="panel intro-panel panel-primary">

                <div className="panel-header">
                    <div className="panel-heading">
                        <span className="txt">CHOOSE YOUR COURSE</span>
                    </div>
                </div>
                <div className="panel-body">
                    <form name="tutorialFiltersForm" className="" id="filters-form" method="post">
                        <div className="form-group">
                            <h3 className="txt-bold filter-heading">Type of course</h3>
                            <div className="control-group">
                                <label className="control control--checkbox">
                                    <input
                                        type="checkbox"
                                        name="tags[]"
                                        data-id="t-1"
                                        className="filter-checkbox"
                                        value="1"/>
                                    <span className="tag-name">Free</span>
                                    <span className="tut-count">(31)</span>
                                    <div className="control--indicator"></div>
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <h3 className="txt-bold filter-heading">Version</h3>
                            <div className="control-group">
                                <label className="control control--checkbox">
                                    <input
                                        type="checkbox"
                                        name="sub_topics[]"
                                        data-id="s-213"
                                        className="filter-checkbox"
                                        value="213"/>
                                    <span className="tag-name">Angular 2</span>
                                    <span className="tut-count">(2)</span>
                                    <div className="control--indicator"></div>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panel intro-panel ad-panel carbon-ad-wrapper">
                <div
                    id="bsap_1307146"
                    className="bsarocks bsap_6fba55887eb53bc92b4685aca67a06b0"></div>
            </div>
            <div className="hidden panel intro-panel sidepanel-share">
                <div className="panel-header">
                    <div className="panel-heading">
                        <span className="txt">SHARE THESE TUTORIALS WITH YOUR FRIENDS</span>
                    </div>
                </div>
                <div className="panel-body text-center">
                    <div className="share-next sidepanel-share-btn">
                        <div className="share-group1">
                            <a target="_blank" className="share-btn no-count share-facebook">
                                <i className="icon ion-social-facebook"></i>
                                <span className="txt">Share</span>
                            </a>
                            <a target="_blank" className="share-btn no-count share-twitter">
                                <i className="icon ion-social-twitter"></i>
                                <span className="txt">Tweet</span>
                            </a>
                        </div>
                        <div className="share-group2">
                            <a target="_blank" className="share-btn no-count share-linkedin">
                                <i className="icon ion-social-linkedin"></i>
                                <span className="txt">Share</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default sideBar;