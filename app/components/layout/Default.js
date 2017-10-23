'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { Button, message, Row, Col } from 'antd';
import HeaderComp from 'app/components/Header';
import FooterComp from 'app/components/Footer';

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

let DefaultLayout = (props) => {

	return (
		<div>
			<div className="header">
              <HeaderComp/>
            </div>

			{props.children}

			 <div className="footer">
                <FooterComp/>
            </div>
		</div>
	)
}

const ConnectDefaultLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultLayout)

export default ConnectDefaultLayout;
