import React, { Component } from 'react';

export default class Porfolio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const projectLinks = [
      {
        "name":"project1",
        "description":"mobileapp",
        "imgurl":"images/portfolio/phone.jpg",
        "url": "https://lvv5040.github.io/Homework-05/"
      },
      {
        "name":"project2",
        "description":"mobileapp",
        "imgurl":"images/portfolio/project.jpg",
        "url": "https://lvv5040.github.io/Homework-04/"
      },
      {
        "name":"project3",
        "description":"mobileapp",  
        "imgurl":"images/portfolio/project2.png",
        "url": "https://lvv5040.github.io/Homework-06/"

      },
      {
        "name":"project4",
        "description":"mobileapp",
        "imgurl":"images/portfolio/phone.jpg",
        "url": "https://lvv5040.github.io/Homework-03/"

      }
    ]
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Here are some examples of applications I have created:</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            projectLinks && projectLinks.map((project)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${project.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{project.name}</h5>
                          <p>{project.description}</p>
                          <a hef={project.url}>{project.url}</a>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}