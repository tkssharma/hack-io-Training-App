
import React from 'react'

const  socialShare = (props) => {
    return (
        <div className="sidebar-content profile-sidebar col-sm-4">
        <div className="panel intro-panel">
            <div className="panel-header">
                <div className="panel-heading">
                    <span className="">Add Training Courses</span>
                </div>
            </div>
            <div className="panel-body">
                <ul className="flex-list list-unstyled">
                    <li>
                        <a href="" onClick={props.openTraining} className="btn full_width add-training">
                            Add Training

        </a>
                    </li>
                    <li>
                        <a rel="nofollow" href="https://twitter.com/home?status=Tarun's recommendations of the best online programming courses: https://nextio.io/tarun-sharma"
                            target="_blank" className="btn full_width add-training ">
                            View Trainings

        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
};
export default socialShare;