import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ProfileHeader from './profile/ProfileHeader';
import SocialBox from './profile/SocialBox';
import {Tabs} from 'antd';
import VideoList from '../home/VideoList';
import TrainingContainer from '../common/trainingContainer';

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
     <ProfileHeader  user={this.props.user}/>
    <div className="page--section-body tutorial--tut-list">
     <div className="container alt">
      <div className="row">
       <div className="col-xs-12 no-padding">
        <div className="flex-container profile-container">

         <div className="main-content border col-sm-8">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
           <TabPane tab="Submitted Trainings" key="1">
             <TrainingContainer />
           </TabPane>
           <TabPane tab="Saved Courses" key="2">
           
           </TabPane>
           <TabPane tab="Liked Videos" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
         </div>

         <div className="sidebar-content profile-sidebar col-sm-4">
         <SocialBox />
         </div>
        </div>
        <div className="page--section">
          <div className="container">
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
   .get('user'),
   training: state.training
   
 }
}
const mapDispatchToProps = dispatch => ({
 // fetchProfile: () => dispatch(Action.fetchProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
