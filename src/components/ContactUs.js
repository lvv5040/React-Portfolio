import React, { Component } from 'react';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Lets colaborate! Feel free to contact me on any social medias! 
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in : 
                  <span><a href="https://www.linkedin.com/in/lisa-van-huijkelom/">https://www.linkedin.com/in/lisa-van-huijkelom/</a></span>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}