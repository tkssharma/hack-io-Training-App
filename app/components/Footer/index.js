import React from 'react'

export default class CommonFooter extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <footer>
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div className="footer-holder">
          <div className="links">
            <ul className="fx-links">
              <li><a href="https://hackr.io/about">About Us</a></li>
              <li><a href="https://hackr.io/latest">Latest Tutorials</a></li>
              <li><a href="https://design.instructy.io" target="_blank">Instructy Design</a></li>
              <li><a href="https://hackr.io/help">Help &amp; FAQ</a></li>
              <li><a data-toggle="modal" data-target="#modalFeedback" href="javascript:void(0)">Feedback</a></li>
            </ul>
          </div>
          <div className="social-links links">
            <ul className="fx-links">
              <li><a href="https://www.facebook.com/hackr.io" target="_blank" rel="nofollow" className="facebook"><i className="fa fa-facebook"></i>Facebook</a></li>
              <li><a href="https://twitter.com/hackrio_" target="_blank" rel="nofollow" className="twitter"><i className="fa fa-twitter"></i>Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
  }
}
