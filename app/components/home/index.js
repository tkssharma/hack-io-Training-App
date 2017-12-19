'use strict';

import React from 'react';
import Home from './home';
import VideoList from './VideoList';
//import 'react-html5video/dist/styles.css';

const Index = (props) => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="home-wrapper">
          <Home/>
        </div>
      </div>
    </div>
  )
}

export default Index;
