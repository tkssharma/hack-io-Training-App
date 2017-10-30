'use strict';

import React from 'react';
import {render} from 'react-dom';
import asyncComponent from './AsyncComponent'
import '../public/css/style.css';
import '../public/css/override.css'
import {
	Router,
	Redirect,
	Route,
	Link,
	hashHistory,
	browserHistory,
	IndexRoute
} from 'react-router';
import {Provider} from 'react-redux';
import store from 'app/redux/stores';
import {syncHistoryWithStore} from 'react-router-redux'

import * as API from 'app/api'
import * as AuthMiddleware from 'app/utils/middlewares/AuthMiddleware';
import * as APIMiddleware from 'app/utils/middlewares/API';
import * as ScriptMiddleware from 'app/utils/middlewares/Script';
const history = syncHistoryWithStore(browserHistory, store);

import * as Action from 'app/redux/actions';

// ------------------Login pages-------------------//
import RegisterPage from 'app/components/auth/Register';
import LoginPage from 'app/components/auth/Login';
import LogoutPage from 'app/components/auth/Logout';
import ResetPasswordPage from 'app/components/auth/ResetPassword';
import ValidateTokenPage from 'app/components/auth/ValidateToken';
import AuthLayout from 'app/components/layout/Auth';
//-----------------------dashboard pages -------------//
import DashBoardComponent from 'app/components/dashboard/dashboardPage';
// ------------------Application Pages-------------//
import AppLayout from 'app/components/layout/Default';
import PublicLayout from 'app/components/layout/Public';
import PublicIndexPage from 'app/components/home/index';
//--------------------Dashboard------------------//
import DefaultLayout from 'app/components/layout/Default';

render((
	<Provider store={store}>
		<Router history={hashHistory}>

			<Route path="/" component={PublicLayout}>
				<IndexRoute component={PublicIndexPage}/>
			</Route>

			<Route path="auth" component={AuthLayout}>
				<Route
					path="register"
					component={RegisterPage}
					onEnter={AuthMiddleware.notLoggedIn}/>
				<Route path="login" component={LoginPage} onEnter={AuthMiddleware.notLoggedIn}/>
				<Route path="logout" component={LogoutPage}/>
				<Route path="validate-token" component={ValidateTokenPage}/>
				<Route
					path="reset-password"
					component={ResetPasswordPage}
					onEnter={AuthMiddleware.notLoggedIn}/>
			</Route>

			<Route
				path="user"
				component={PublicLayout}
				onEnter={AuthMiddleware.authenticatedUsersOnly}>
				<IndexRoute component={DashBoardComponent}/>
				<Route path="dashboard" component={DashBoardComponent}/>
			</Route>

		</Router>
	</Provider>
), document.getElementById("app"));
