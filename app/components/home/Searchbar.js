import React, {Component} from 'react';

const searchBar = props => {
 return (
  <div className="search-bar">
   <div className="form-holder">
    <div id="navbarSearch">
     <input
      className="form-control navbar-search-input nav-input js-filter-topics"
      type="text"
      placeholder=" Search for the language you want to learn: Python, Javascript, ... "/>
    </div>
    <i className="icon ion-ios-search-strong"></i>
   </div>
  </div>
 )
}
export default searchBar;