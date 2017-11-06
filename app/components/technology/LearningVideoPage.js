'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as Action from 'app/redux/actions';
import VideoList from '../home/VideoList';
import Searchbar from '../home/Searchbar';
// Be sure to include styles at some point, probably during your bootstrapping
import AppLoader from '../home/AppLoader';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state
      .auth
      .get('user'),
    course: state.course
  }
}
const mapDispatchToProps = dispatch => ({
  loadCourses: () => dispatch(Action.courseLoad())
});

class LearningVideos extends Component {
  constructor(props) {
    super(props);
      this.state ={
        filteredLoadedCourse : []
      }
    this.openCourseData = this
      .openCourseData
      .bind(this);
    this.filterloadedCourses = this
      .filterloadedCourses
      .bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.course !== this.props.course) {
      //alert(nextProps.course)
      this.setState({filteredLoadedCourse : nextProps.course.courseData})
    }
  }
  filterloadedCourses(data) {
    var searchString = data.trim().toLowerCase();
    var filteredLoadedCourse = [];
    if (searchString.length > 0 && this.props.course) {
      // We are searching. Filter the results.
      filteredLoadedCourse = this.props.course.courseData.filter(function (l) {
        return l.Title.toLowerCase()
          .match(searchString);
      });
    }
    this.setState({filteredLoadedCourse : filteredLoadedCourse})
  }
  componentWillMount() {
    this
      .props
      .loadCourses();
  }
  openCourseData(data, e) {
    e.preventDefault();
    console.log('coming ....' + data);
  }
  render() {
    return (
      <div>
        {(this.props.course && this.props.course.loaded)
          ? (<AppLoader loaded={true}/>)
          : (<AppLoader loaded={false}/>)}
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
                  <Searchbar filterCourses={this.filterloadedCourses}/>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="page--section">
            <div className="container">
              <VideoList courseData={this.state.filteredLoadedCourse}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningVideos);
