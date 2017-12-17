import React, {Component} from 'react';

import routes from 'app/redux/constants/Routes';
import Searchbar from './Searchbar';
import courseListArray from '../dashboard/CourseList';
import {Icon, Button, Input, AutoComplete} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as Action from 'app/redux/actions';
const Option = AutoComplete.Option;

const mapStateToProps = (state, ownProps) => {
  return {
    user: state
      .auth
      .get('user'),
    course: state.course
  }
}
const mapDispatchToProps = dispatch => ({
  loadCourses: () => dispatch(Action.courseLoad()),
  openSelectedCourseTutorials: (key) => dispatch(Action.openSelectedCourseTutorials(key))
});

function renderOption(item) {
  return (
    <Option key={item.name} text={item.name}>
      {item.name} 
    </Option>
  );
}
function searchResult(query) {
  console.log(query);
  return courseListArray.filter((item)=> {
      return item.name.toLowerCase().match(query.toLowerCase())
  })
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: courseListArray
    }
    this.onSelect = this
      .onSelect
      .bind(this);
   this.handleSearch = this.handleSearch.bind(this);   

  }
  handleSearch = (value) => {
    this.setState({
      dataSource: value ? searchResult(value) : courseListArray,
    });
  }
  onSelect(value) {
    console.log('onSelect', value);
    this
      .props
      .openSelectedCourseTutorials(value);
  }
  render() {
    return (
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
              <h1 className="hero-header-title">GenNext Training to deliver project based
                learning to give you the head start you need as a developer
              </h1>
              <h2 className="hero-header-subtitle">Level up your programming skills today with
                condensed video lessons on industry leading web frameworks and tools!
              </h2>
              <div
                className="global-search-wrapper"
                style={{
                width: 900
              }}>
                <AutoComplete
                  className="global-search"
                  size="large"
                  style={{
                  width: '100%'
                }}
                  dataSource={this.state.dataSource.map(renderOption)}
                  onSelect={this.onSelect}
                  placeholder="Enter course name to search"
                  onSearch={this.handleSearch}>
                  <Input
                    suffix={(
                    <Button className="search-btn" size="large" type="primary">
                      <Icon type="search"/>
                    </Button>
                  )}/>
                </AutoComplete>
              </div>

            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
