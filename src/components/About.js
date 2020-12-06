import React, { Component } from 'react';
import headshot from "../images/headshot.jpeg";

export default class About extends Component {
   constructor(props) {
      super(props);
    }
  render() {
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={headshot} alt="profile image" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
               I am currently enrolled in a Fullstack Software Engineer BootCamp at Denver University, and I will be graduating in December 2020. Outside of learning how to code I love hiking, photography, biking, and video games.
               </p>
               <div className="row">
                  <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>Lisa Van Huijkelom</span>
                     <br></br>
       						   <span>
                           Colorado
                    </span>
                    <br></br>
                    <span><a href="https://github.com/lvv5040">https://github.com/lvv5040</a></span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}