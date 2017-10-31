import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

class ProfilePage extends Component {
 constructor(props) {
  super(props);
  this.state = {};
  this.callback = this.callback.bind(this);
 }
 callback(key) {
  console.log(key);
}
 render() {
  return (
   <div className="dashboard-wrapper page--section no-paddingtop">
    <div className="page--section-header profile--header">
     <div className="container alt no-padding">
      <div className="row">
       <div className="col-xs-12">
        <div className="page--section-heading fx fd-col-mob fx-wrap fx--ai-c fx--jc-fs">
         <div className="profile-img"></div>
         <div className="profile-info">
          <h1 className="profile-title">Tarun Sharma</h1>
          <p className="desc"></p>
          <div className="page--section-subheading">Member Since: October, 2017</div>
         </div>
         <div className="profile-actions">
          <div className="repo-sec">
           <div className="repo-panel">
            <div className="repo-title">
             <span className="txt">Reputation
              <a href="javascript:void(0);"></a>
             </span>
            </div>
            <div className="repo-points">10</div>
           </div>
           <div className="repo-panel margintop-md">
            <div className="repo-title">
             <span className="txt">Badge Tally
              <a
               title="">
               <i className="fa fa-info-circle"></i>
              </a>
             </span>
            </div>
            <div className="repo-block fx fx--jc-fe">
             <div className="repo-points with-icon gold" title="0  gold badge  ">
              <i className="icon ion-ribbon-b"></i>0</div>
             <div className="repo-points with-icon silver" title="0  silver badge  ">
              <i className="icon ion-ribbon-b"></i>0</div>
             <div className="repo-points with-icon bronze" title="0  bronze badge  ">
              <i className="icon ion-ribbon-b"></i>0</div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>

    <div className="page--section-body tutorial--tut-list">
     <div className="container alt">
      <div className="row">
       <div className="col-xs-12 no-padding">
        <div className="flex-container profile-container">

         <div className="main-content border col-sm-8">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
           <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
           <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
           <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
         </div>

         <div className="sidebar-content profile-sidebar col-sm-4">

          <div className="panel intro-panel">
           <div className="panel-header">
            <div className="panel-heading">
             <span className="txt">
              Share your profile page
             </span>
            </div>
           </div>
           <div className="panel-body">
            <ul className="flex-list list-unstyled">
             <li>
              <a
               rel="nofollow"
               href="https://www.facebook.com/sharer/sharer.php?u=https://hackr.io/tarun-sharma"
               target="_blank"
               className="btn full_width btn_facebook">
               <i className="fa fa-facebook"></i>
               Facebook</a>
             </li>
             <li>
              <a
               rel="nofollow"
               href="https://twitter.com/home?status=Tarun's recommendations of the best online programming courses: https://hackr.io/tarun-sharma"
               target="_blank"
               className="btn full_width btn_twitter">
               <i className="fa fa-twitter"></i>
               Twitter</a>
             </li>
            </ul>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="clearfix"></div>
   </div>
  );
 }
}
const propTypes = {};
const defaultProps = {};

ProfilePage.propTypes = propTypes;
ProfilePage.defaultProps = defaultProps;

const mapStateToProps = (state, ownProps) => {
 return {
  user: state
   .auth
   .get('user')
 }
}
const mapDispatchToProps = dispatch => ({
 // fetchProfile: () => dispatch(Action.fetchProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
