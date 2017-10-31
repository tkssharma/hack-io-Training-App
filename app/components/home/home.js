import React, {Component} from 'react';

import routes from 'app/redux/constants/Routes';
import Searchbar from './Searchbar';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="home--hero-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center hero-header-container">
              <div className="center-logo">
                <a href="https://next.io">
                  <img
                    src="https://s3.amazonaws.com/codementor_content/2016-Jun/code_fellows.png"/>
                </a>
              </div>
              <h1 className="hero-header">Find the Best programming Courses &amp; Tutorials</h1>
              <h1 className="hero-header">Search Best programming tutorials</h1>
               <Searchbar />
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
