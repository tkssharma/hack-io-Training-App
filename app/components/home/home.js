import React, {Component} from 'react';

import routes from 'app/redux/constants/Routes';
import Searchbar from './Searchbar';
import courseListArray from '../dashboard/CourseList';
import {Icon, Button, Input, AutoComplete} from 'antd';

class Home extends Component {

  constructor(props) {
    super(props);
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
                  width: '100%',
                  height:100
                }}
                
                  dataSource={courseListArray}
                  placeholder="Enter course name to search"
                  filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}>
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

export default Home;
