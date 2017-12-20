import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AboutUsPage extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page--section no-paddingtop">
                <div className="page--section-header static--section">
                    <div className="container">
                        <div className="row">
                            <div className="page--section-header col-xs-12">
                                <div className="col-xs-12">
                                    <h1 className="page--section-heading big text-primary col-xs-12">About Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page--section-body">
                    <div className="container">
                        <div className="row">
                            <div className="page--section-body col-xs-12">
                                <div className="col-xs-12">
                                    <div className="team-holder fx wrap-mob fx--jc-c fx--ai-fs">
                                        <div className="team-media">
                                            <div className="team-img"></div>
                                            <ul className="team-social fx fx--ai-c fx--jc-c">
                                                <li>
                                                    <a className="social-linkedin" rel="nofollow" href="https://in.linkedin.com/">
                                                        <i className="ion-social-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="social-twitter"
                                                        rel="nofollow"
                                                        href="https://twitter.com/tkssharma">
                                                        <i className="ion-social-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="social-web" rel="nofollow" href="https://medium.com/@tkssharma/">
                                                        <i className="ion-ios-world"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-desc">
                                            <h2 className="name">Tarun Sharma (Co-Founder)</h2>
                                            <div className="desc">Tarun has worked on different project from different
                                                clients like IBM, Amdocs, UHG & currently working with startup as Tech Lead and
                                                mentoring team on different technology stack, you can
                                                Reach him at  <a rel="nofollow" href="mailto:tarun.softengg@gmail.com">tarun.softengg@gmail.com</a>
                                                for anything about.</div>
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

export default AboutUsPage;
