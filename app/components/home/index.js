'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {
  Input,
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
  Button
} from 'antd';
const InputGroup = Input.Group;
import {Link} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state
      .user
      .get('profile')
  }
}
const mapDispatchToProps = dispatch => ({});

let Home = (props) => {

  return (
    <div></div>
  )

}

const ConnectHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectHome;
