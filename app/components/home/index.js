'use strict';

import React from 'react';
import Home from './home';
import VideoList from './VideoList';
const Index = (props) => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="home-wrapper">
          <Home/>
          <div className="page--section">
            <div className="container"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
