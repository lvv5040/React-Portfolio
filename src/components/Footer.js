import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const socialLinks = [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/lisa-van-huijkelom/",
        className: "fa fa-linkedin",
      },
      {
        name: "github",
        url: "https://github.com/lvv5040",
        className: "fa fa-github",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/lisaundalex/",
        className: "fa fa-instagram",
      },
    ];
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {socialLinks &&
                socialLinks.map((link) => {
                  return (
                    <li>
                      <a href={link.url}>
                        <i className={link.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
