'use strict';

import React from 'react';
import SearchBar from './searchBar';
import VideoList from './VideoList';
const Home = (props) => {
  return (
    <div>
      <div className="page-wrapper">
        <SearchBar/>
        <div className="page--section">
          <div className="container">
            <VideoList/>
            <div className="row">
              <div className="col-xs-12 text-center">
                <div className="footer-action">
                  <div className="btn btn-primary js-home-load-more">
                    load more categories
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )

}

export default Home;
