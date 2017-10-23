'use strict';

import React from 'react';
import {render} from 'react-dom';
import asyncComponent from './AsyncComponent'

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

		</Router>
	</Provider>
), document.getElementById("app"));
