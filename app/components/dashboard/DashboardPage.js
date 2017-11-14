'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import CommonHeader from '../../components/Header'
import CommonFooter from '../../components/Footer';
import * as Action from 'app/redux/actions';
import Helper from 'app/global/helper';
import VideoList from '../home/VideoList';
import CourseList from '../home/CourseList';
import Searchbar from '../home/Searchbar';
import UserRemoteSelect from './select';
import courseListArray from './CourseList';
import Select from 'react-select';
// Be sure to include styles at some point, probably during your bootstrapping

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.get('user'),
    course: state.course
  }
}
const mapDispatchToProps = dispatch => ({
  loadCourses: () => dispatch(Action.courseLoad()),
  openSelectedCourseTutorials : (key) => dispatch(Action.openSelectedCourseTutorials(key)),
});

class DashBoardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCourseList: courseListArray
    }
    this.filterCourses = this
      .filterCourses
      .bind(this);
      this.openCourseData = this
      .openCourseData
      .bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      alert(nextProps.value)
    }
  }
  openCourseData(key,e){
      e.preventDefault();
     this.props.openSelectedCourseTutorials(key);
  }

  componentWillMount() {
    this
      .props
      .loadCourses();
  }

  filterCourses(data) {
    var searchString = data.trim().toLowerCase();
    var filteredCourseList = courseListArray;
    if (searchString.length > 0) {
      // We are searching. Filter the results.
      filteredCourseList = courseListArray.filter(function (l) {
        return l
          .toLowerCase()
          .match(searchString);
      });
    }
    this.setState({filteredCourseList : filteredCourseList})
  }

  render() {
    const {user} = this.props;

    return (
        <div className="dashboard-wrapper">
          <div className="home--hero-header">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 text-center hero-header-container">
                  <div className="center-logo">
                    <a href="https://next.io">
                      <img
                        src="https://s3.amazonaws.com/codementor_content/2016-Jun/code_fellows.png"/>
                    </a>
                  </div>
                  <h1 className="hero-header">Search Best programming tutorials</h1>
                  <Searchbar filterCourses={this.filterCourses}/>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="page--section">
            <div className="container">
              <CourseList openCourseData ={this.openCourseData} courseData={this.state.filteredCourseList}/>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardComponent);
