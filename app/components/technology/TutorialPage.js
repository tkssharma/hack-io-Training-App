import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SideBar from '../common/sideBar';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as Action from 'app/redux/actions';
import courseListArray from '../dashboard/CourseList';
import routes from 'app/redux/constants/Routes';
import TutorialHeader from './common/tutorialPageHeader';
import {AppLoader} from '../home/AppLoader';
import { message, notification } from 'antd';
import { hashHistory } from 'react-router';
import TutorialContainer from './common/tutorialPageContriner';

const mapStateToProps = (state, ownProps) => {
  return {
      user: state
          .auth
          .get('user'),
      course: state.course
    }
}
const mapDispatchToProps = dispatch => ({
  //openTrainingModel: () => dispatch(Action.submitTrainingModel())
  openSelectedCourseTutorials: (key) => dispatch(Action.openSelectedCourseTutorials(key))
  
});


class LearningTutorial extends Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const name = this.props.params.name;
    this.props.openSelectedCourseTutorials(name);
  }

  render() {

    let {selectedCourseTutorials, searchKey,loaded } = this.props.course;
    let obj = {};

    if((this.props.course && searchKey)){
      courseListArray.map((item)=>{
       if((item.name.toLowerCase()) === (searchKey.toLowerCase())){
         obj = {
           title : item.name,
           icon : item.icon,
           description : item.description,
           loaded : true
         };
       }
     })         
   }

    return (
      <div className="learning-wrapper">
        <div className="page--section-header tutorial--tut-title">
          <div className="container alt">
            <div className="row">
              <div className="col-xs-12">
                <div
                  className="page--section-heading tut-section-heading fx wrap-mob fx-wrap fx--ai-fs fx--jc-fs">
                  <div className="category-header-wrapper-mobile">
                   <TutorialHeader data={obj} />
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
                  <a href="#" className="open-tut-filters">Filters</a>
                </div>
                <div className="flex-container">
                  <div className="main--content col-xs-12 col-sm-12 col-md-9 no-padding">
                    <div className="js-tutorial-listing-content">
                      <div className="main-content border">
                        <div className="top-tut-container">
                          <p className="top-tut-title">Top tutorials</p>
                          <div className="top-tut-filters">
                            <button
                              className="top-tut-selection  selection-active  js-sort-btn"
                              data-sort="upvotes">Upvotes</button>
                            <button
                              className="top-tut-selection   js-sort-btn marginright-md"
                              data-sort="recent">Recent</button>
                          </div>
                        </div>
                        <AppLoader  loaded={loaded}/>
                        { selectedCourseTutorials.length > 0  ? ( <TutorialContainer  data={selectedCourseTutorials}/>) : ( <div className="dataNotFound">No Training data found for {this.props.params.name}  </div>)} 
                      </div>
                    </div>
                  </div>
                    <SideBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningTutorial);
