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
const mapStateToProps = (state, ownProps) => {
  return {
    user: state
      .auth
      .get('user')
  }
}
const mapDispatchToProps = dispatch => ({
 // fetchProfile: () => dispatch(Action.fetchProfile()),
});

class DashBoardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //this.props.fetchProfile();
  }
  logout() {

  }
  render() {
    const {user} = this.props;

    return (
    <div className="home--hero-header">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center hero-header-container">
          <div className="center-logo">
            <a href="https://next.io">
              <img src="https://s3.amazonaws.com/codementor_content/2016-Jun/code_fellows.png"/>
            </a>
          </div>
          <h1 className="hero-header">Search Best programming tutorials</h1>
          <div className="search-bar">
            <div className="form-holder">
              <div id="navbarSearch">
                <input className="form-control navbar-search-input nav-input js-filter-topics" type="text" placeholder=" Search for the language you want to learn: Python, Javascript, ... "/>
              </div>
              <i className="icon ion-ios-search-strong"></i>
            </div>
          </div>
          <VideoList />
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardComponent);
