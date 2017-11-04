import React, {Component} from 'react';

export class AppLoader extends Component {

 constructor(props) {
  super(props)
 }
 render() {
  if (! this.props.loaded) {
   return (
    <loader className="loader-dots ">
     <div className="ball ball1"></div>
     <div className="ball ball2"></div>
     <div className="ball ball3"></div>
    </loader>
   );
  } else {
   return (
    <div></div>
   );
  }
 }
}

export default AppLoader;
