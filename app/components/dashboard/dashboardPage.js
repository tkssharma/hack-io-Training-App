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
import Searchbar from '../home/Searchbar';
import UserRemoteSelect from './select';

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
                 <Searchbar />
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="page--section">
          <div className="container">
            <VideoList/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardComponent);
