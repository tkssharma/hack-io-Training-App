import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as Action from 'app/redux/actions';
import Model from './submitTrainingModel';
import socialShare from '../common/socialShare';
import TrainingContainer from '../common/trainingContainer';
import {AppLoader} from '../home/AppLoader';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state
            .auth
            .get('user'),
        training: state.training
    }
}
const mapDispatchToProps = dispatch => ({
    openTrainingModel: () => dispatch(Action.submitTrainingModel()),
    submitTraining: () => dispatch(Action.submitTraining()),
    fetchTraining: () => dispatch(Action.fetchTraining()),
    submitTrainingModelClose: () => dispatch(Action.submitTrainingModelClose())
});


class LearningTraining extends Component {

    constructor(props) {
        super(props);
        this.openTraining = this.openTraining.bind(this);
        this.submitTrainingModelClose = this.submitTrainingModelClose.bind(this);
    }
    openTraining(e) {
        e.preventDefault();
        this.props.openTrainingModel();
    }
    submitTrainingModelClose() {
        this.props.submitTrainingModelClose()
    }
    componentWillMount() {
        this.props.fetchTraining();
    }

    render() {
        return (
            <div>
                {(this.props.training && this.props.training.trainingModel)
                    ? (<Model submitTraining={this.props.submitTraining} closeModel={this.submitTrainingModelClose} open={true} />)
                    : (<Model submitTraining={this.props.submitTraining} closeModel={this.submitTrainingModelClose} open={false} />)}

                    {(this.props.training.trainingData && this.props.training.trainingData)
                      ? (<AppLoader loaded={true} />)
                     : (<AppLoader loaded={false} />)}

                <div className="learning-wrapper">
                    <div className="page--section-header tutorial--tut-title">

                        <div className="container alt">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div
                                        className="page--section-heading tut-section-heading fx wrap-mob fx-wrap fx--ai-fs fx--jc-fs">
                                        <div className="category-header-wrapper-mobile">
                                            <div className="category-header">
                                                <img className="tut-icon" src="https://cdn.geekwire.com/wp-content/uploads/2015/01/code-fellows-logo-shield-266x300.png" ></img>
                                                <div className="tut-info">
                                                    <h1 className="tut-title">All Published Trainings</h1>
                                                    <div className="tut-description hidden-xs">
                                                        <p className="page--section-subheading">Learn front end development online from the best trainers</p>
                                                        <div className="share-nextio">
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
                                                <div className="share-nextio">
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
                    { (this.props.training && this.props.training.trainingData) ? ( <TrainingContainer openTraining={this.openTraining} data = {this.props.training.trainingData} />) : <div /> }   
                    </div>
                </div>
            </div>


        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningTraining);

