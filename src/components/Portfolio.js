import React, { Component } from 'react';
import projectImg from "../images/dayplanner.jpg";

export default class Porfolio extends Component {
  render() {
    // const projectLinks = [
    //   {
    //     "name":"project1",
    //     "description":"mobileapp",
    //     "imgurl":{projectImg},
    //     "url": "https://lvv5040.github.io/Homework-05/"
    //   },
    //   {
    //     "name":"project2",
    //     "description":"mobileapp",
    //     "imgurl":{projectImg},
    //     "url": "https://lvv5040.github.io/Homework-04/"
    //   },
    //   {
    //     "name":"project3",
    //     "description":"mobileapp",  
    //     "imgurl":{projectImg},
    //     "url": "https://lvv5040.github.io/Homework-06/"

    //   },
    //   {
    //     "name":"project4",
    //     "description":"mobileapp",
    //     "imgurl":{projectImg},
    //     "url": "https://lvv5040.github.io/Homework-03/"

    //   }
    // ]
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Here are some examples of applications I have created:</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01">
                <img src={projectImg} className="item-img"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>project1</h5>
                    <p>mobileapp</p>
                    <a hef="https://lvv5040.github.io/Homework-05/">https://lvv5040.github.io/Homework-05/</a>
                  </div>
                </div>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
  </section>
        );
  }
}