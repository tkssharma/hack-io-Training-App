import React, { Component } from 'react';

class SearchBar extends Component {
 render() {
  return (
   <div className="home--hero-header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center hero-header-container">
            <div className="center-logo">
              <a href="https://next.io">
                <img src="https://learn.playto.io/img-global/logo-200x200.png"/>
              </a>
            </div>
            <h1 className="hero-header">Find the Best programming Courses &amp; Tutorials</h1>
            <div className="search-bar">
              <div className="form-holder">
                <div id="navbarSearch">
                  <input className="form-control navbar-search-input nav-input js-filter-topics" type="text" placeholder=" Search for the language you want to learn: Python, Javascript, ... "/>
                </div>
                <i className="icon ion-ios-search-strong"></i>
              </div>
            </div>

          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
 }
}

export default SearchBar;
