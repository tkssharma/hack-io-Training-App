import React, { PropTypes } from 'react'
import './index.less'
import { Link } from 'react-router'

export default class CommonHeader extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<nav className="navbar navbar-fixed-top">
    <div className="container">
     <div className="navbar-holder">
      <div className="navbar-header">
       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded="false">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
       <button data-message="" className="js-open-submit-tutorial   visible-xs nav-btn pull-right btn cta-sec"><i className="ion-plus"></i> Submit</button>
       <div className="search-bar-toggle nav-icon-toggle visible-xs"><i className="ion-ios-search-strong"></i></div>
       <a className="navbar-brand" href="https://next.io">
       <img class="hackr-logo-text-path hidden-xs" src="https://learn.playto.io/img-global/logo-200x200.png"/>
           </a>
      </div>
      <div className="navbar-search search-bar">
       <form name="headerSearchForm" action="">
        <div className="form-holder">
         <div id="navbarSearch">
         </div>
         <i className="icon ion-ios-search-strong"></i>
        </div>
       </form>
      </div>
      <div className="navbar-collapse collapse" id="navbarCollapse">
       <ul className="nav navbar-nav">
        <li className="cta-link cta-link-border">
         <a href="#" className="js-open-submit-tutorial  " data-message=""><i className="ion-plus"></i> Submit a Tutorial</a>
        </li>
       </ul>
      </div>
      <div className="nav-dropdown-sec nav-notif-sec">
       <div className="dropdown">
        <a id="notifDropdown" className="nav-dropdown nav-notif-dropdown" href="javascript:void(0);" type="button" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
         <div className="icon-holder">
          <i className="icon ion-android-notifications-none"></i>
         </div>
        </a>
        <ul className="dropdown-menu">
         <div className="dropdown-menu-header">
          <div className="title">Notifications</div>
         </div>
         <div className="dropdown-menu-body notif-message-list">
          <li className="notif-message-item ">
           <a href="https://next.io/tarun-sharma" className="notif-message-link">
            <div className="element notif-message-icon upvote">
             <i className="ion-arrow-up-b"></i>
             <div className="message-points">
              <div className="point-label">+10</div>
             </div>
            </div>
            <div className="element notif-message-details">
             <div className="message">
              Welcome, Tarun. You've earned 10 reputation points for joining the next.io community. Click here to have a look at your
              profile.
             </div>
             <div className="timestamp">1 day ago</div>
            </div>
           </a>
          </li>
         </div>
         <div className="dropdown-menu-footer full-link">
          <a className="text-center" href="https://next.io/notifications">
                   <span>See All</span>
                 </a>
         </div>
        </ul>
       </div>
      </div>
      <div className="nav-dropdown-sec nav-profile-sec">
       <div className="dropdown">
        <div id="profileDropdown" className="nav-dropdown nav-profile-dropdown">
         <a href="javascript:void(0);" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="profile-img"
          ></a>
         <ul className="dropdown-menu">
          <li><a href="https://next.io/tarun-sharma?tab=saved">Saved Tutorials</a></li>
          <li><a href="https://next.io/tarun-sharma">My Profile</a></li>
          <li><a href="https://next.io/users/settings">Settings</a></li>
          <li><a href="https://next.io/users/edit_password">Change Password</a></li>
          <li><a href="https://next.io/users/logout" className="logout">Logout</a></li>
         </ul>
         <a href="https://next.io/notifications" className="txt profile-text">
                 <span title="Your reputation: 10" className="text-label">10</span>
                 <ul className="badge-all">
                   <li className="main-badge gold" title="0 gold badge"><i className="ion-record"></i><span className="txt">0</span></li>
                   <li className="main-badge silver" title="0 silver badge"><i className="ion-record"></i><span className="txt">0</span></li>
                   <li className="main-badge bronze" title="0 bronze badge"><i className="ion-record"></i><span className="txt">0</span></li>
                 </ul>
               </a>
        </div>
       </div>
      </div>
     </div>
    </div>
   </nav>)
 }
}
