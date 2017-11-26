import React from 'react'
import SocialShare from './socialShare';
import Training from './training';

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

                                                {props.data.map(function(_item,index){
                                                       return <Training data={_item} key={index} />
                                                   })}
                                                
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