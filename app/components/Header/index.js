import React, {PropTypes} from 'react'
import './index.less'
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as Action from 'app/redux/actions';
import Helper from 'app/global/helper';
import { Menu, Dropdown, Button, Icon } from 'antd';

const mapStateToProps = (state, ownProps) => {
  return {
    app: state
      .app
      .get('default'),
    user: state
      .auth
      .get('user')
  }
}
const mapDispatchToProps = dispatch => ({
  //appConfigToggleAside: () => dispatch( Action.appConfigToggleAside() )
});
const menu = (
  <Menu>
    <Menu.Item>
      <Link to="user/dashboard" rel="noopener noreferrer" >Dashboard</Link>
    </Menu.Item>
    <Menu.Item>
    <Link to="user/profile" rel="noopener noreferrer" >Profile</Link>
    </Menu.Item>
    <Menu.Item>
    <Link to="learning/technology" rel="noopener noreferrer" >My Learnings</Link>
    </Menu.Item>
  </Menu>
);

class CommonHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let _loggedIn = (
      <div className="navbar-collapse collapse hidden-xs" id="navbarCollapse">
        <ul className="nav navbar-nav">
          <li className="cta-link cta-link-border">
            <Link to="/user/dashboard" className="js-open-submit-tutorial  " data-message="">
              <i className="ion-plus"></i> Submit a Tutorial</Link>

          </li>
          <li className="cta-link cta-link-border">
            <Link to="/auth/logout" className="js-open-submit-tutorial  " data-message="">
            <i className="ion-user"></i> Logout</Link>
          </li>
          <li className="cta-link cta-link-border">
          <Dropdown overlay={menu} placement="bottomLeft">
          <Button type="primary" size="large"><Icon type="user-add" /> { this
            .props
            .user
            .get('name')} </Button>
          </Dropdown>
          </li>

        </ul>
      </div>
    );
    let _default = (
      <div className="navbar-collapse collapse hidden-xs" id="navbarCollapse">
        <ul className="nav navbar-nav">
          <li className="cta-link cta-link-border">
            <a href="#" className="js-open-submit-tutorial  " data-message="">
              <i className="ion-plus"></i>
              Submit a Tutorial</a>
            <Link to="/auth/login" className="js-open-submit-tutorial  " data-message="">
              Login</Link>
          </li>
        </ul>
      </div>
    );
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar-holder">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <button
                data-message=""
                className="js-open-submit-tutorial   visible-xs nav-btn pull-right btn cta-sec">
                <i className="ion-plus"></i>
                Submit</button>
              <div className="search-bar-toggle nav-icon-toggle visible-xs">
                <i className="ion-ios-search-strong"></i>
              </div>
              <a className="navbar-brand" href="">
                <img
                  className="hackr-logo-text-path hidden-xs"
                  src="https://s3.amazonaws.com/codementor_content/2016-Jun/code_fellows.png"/>
              </a>
            </div>
            <div className="navbar-search search-bar">
              <form name="headerSearchForm" action="">
                <div className="form-holder">
                  <div id="navbarSearch"></div>
                  <i className="icon ion-ios-search-strong"></i>
                  <input type="text" className="form-control navbar-search-input nav-input js-filter-topics" placeholder=" Search for the language you want to learn: Python, Javascript, ... "/>
                </div>
              </form>
            </div>

            {this
              .props
              .user
              .get('userType') == 1
              ? _loggedIn
              : _default}
          </div>
        </div>
      </nav>
    )
  }
}

const ConnectHeader = connect(mapStateToProps, mapDispatchToProps)(CommonHeader)

export default ConnectHeader;