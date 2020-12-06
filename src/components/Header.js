import React, { Component } from 'react';

export default class Header extends Component {
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
      <>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {this.props.data.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {this.props.data.role}.{this.props.data.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    socialLinks && socialLinks.map(link =>{
                      return(
                              <li key={link.name}>
                                <a href={link.url} target="_blank"><i className={link.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </>
    );
  }
}