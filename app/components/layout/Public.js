'use strict';

import React, {Component} from 'react';
import HeaderComp from 'app/components/Header';
import FooterComp from 'app/components/Footer';
import axios from 'axios';
import * as API from 'app/api';
import {message, notification} from 'antd';
import Auth from 'app/redux/api/Auth';
import StorageAPI from 'app/redux/api/Storage';
import jwt from 'jsonwebtoken';

import routes from 'app/redux/constants/Routes';
import {connect} from 'react-redux';
import * as Action from 'app/redux/actions';

const mapStateToProps = (state, ownProps) => {
	return {
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		authUpdateUserData: (data) => dispatch(Action.authUpdateUserData(data))
	}
}

class PublicPage extends Component {

	constructor(props) {
		super(props);
	}
	componentWillMount() {
		var self = this;
		// const access_token = props.query.token;
		let access_token = Auth.getAccessToken()
		console.log(access_token);
		if (access_token) {
			API.setAuthToken(access_token);
			axios
				.get(API.url('validate_auth'))
				.then((response) => {
					if (response.data.code === 200 && response.data.message === 'success') {
						message.success('Successfully logged in.', 3);
						Auth.setAccessToken(access_token);
						self
							.props
							.authUpdateUserData(jwt.decode(access_token));
						//hashHistory.push('/user/dashboard');
					} else {
						message.error('Invalid auth token, please try logging in again', 3);
						Auth.deleteAccessToken();
						API.setAuthToken();
						//hashHistory.push('/auth/login');
					}
				})
				.catch((response) => {
					console.log('catch error', response);
				});
		}
	}
	render() {
		return (
			<div>
				<HeaderComp/>
				{this.props.children}
				<FooterComp/>
				</div>
		)
	}
}

const PublicRoutePage = connect(mapStateToProps, mapDispatchToProps)(PublicPage);

export default PublicRoutePage;
