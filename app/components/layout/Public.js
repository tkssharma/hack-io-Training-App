'use strict';

import React from 'react';
import { Row, Col } from 'antd';
import HeaderComp from 'app/components/Header';
import FooterComp from 'app/components/Footer';

let PublicPage = (props) => {

	return (
		<div>
			  <HeaderComp />
					{props.children}
		</div>
	);

}

export default PublicPage;
