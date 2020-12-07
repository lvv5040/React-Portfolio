import React, { Component } from 'react';
import projectImg from "../images/dayplanner.jpg";
import projectImg2 from "../images/test.jpg";
import projectImg3 from "../images/weather.jpg";
import projectImg4 from "../images/password.jpg";

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
          <div class="gallery">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01">
                <img src={projectImg} className="item-img"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>project1</h5>
                    <p>Day Planner</p>
                    <a hef="https://lvv5040.github.io/Homework-05/">https://lvv5040.github.io/Homework-05/</a>
                  </div>
                </div>
              </a>
              <br></br>
              <a href="#modal-02">
                <img src={projectImg2} className="item-img"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>project2</h5>
                    <p>Quiz App</p>
                    <a hef="https://lvv5040.github.io/Homework-04/">https://lvv5040.github.io/Homework-04/</a>
                  </div>
                </div>
              </a>
              <br></br>
              <a href="#modal-03">
                <img src={projectImg3} className="item-img"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>project3</h5>
                    <p>Weather App</p>
                    <a hef="https://lvv5040.github.io/Homework-06/">https://lvv5040.github.io/Homework-06/</a>
                  </div>
                </div>
              </a>
              <br></br>
              <a href="#modal-04">
                <img src={projectImg4} className="item-img"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>project4</h5>
                    <p>Password Generator App</p>
                    <a hef="https://lvv5040.github.io/Homework-03/">https://lvv5040.github.io/Homework-03/</a>
                  </div>
                </div>
              </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  </section>
        );
  }
}



