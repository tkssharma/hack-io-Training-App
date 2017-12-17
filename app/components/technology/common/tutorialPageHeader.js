import React from 'react';

const profileHeader = function (props) {

    return (

        <div className="category-header">
            <img
                src={props.data.icon}
                alt="Learn tutorials"
                className="tut-icon"/>
            <div className="tut-info">
                <h1 className="tut-title">{props.data.title}
                    Tutorials and Courses</h1>
                <div className="tut-description hidden-xs">
                    <p className="page--section-subheading">{props.data.description}</p>
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
    )
}

export default profileHeader;
