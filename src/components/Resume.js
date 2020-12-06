import React, { Component } from 'react';

export default  class Resume extends Component {
  render() {
    const education =[
      {
        "UniversityName":"Penn State Abington",
        "specialization":"Corporate Communication",
        "MonthOfPassing":"May",
        "YearOfPassing":"2014",
        "Achievements":"With a minor in Business"
      },
      {
        "UniversityName":"Denver University",
        "specialization":"Fullstack Software Engineer Bootcamp",
        "MonthOfPassing":"December",
        "YearOfPassing":"2020",
        "Achievements":"Fullstack Software Concepts"
      }
    ];

    const jobs = [
      {
        "CompanyName":"Infinicept",
        "specialization":"Tier II Anyalyst",
        "MonthOfLeaving":"From November 2019 to",
        "YearOfLeaving":"Current",
        "Achievements":"Working through tickets from our clients, analyzing their concerns, requests, and updates."
      },
      {
        "CompanyName":"CardConnect",
        "specialization":"Account Manager",
        "MonthOfLeaving":"From September 2017 to",
        "YearOfLeaving":"October 2019",
        "Achievements":"Working with a portfolio of clients, helping them through the onboarding process and post onboarding requests."
      }
    ];
    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                education && education.map((school)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{school.UniversityName}</h3>
                          <p className="info">
                          {school.specialization}
                          <span>&bull;</span> <em className="date">{school.MonthOfPassing} {school.YearOfPassing}</em></p>
                          <p>
                          {school.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                jobs && jobs.map((job) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{job.CompanyName}</h3>
                          <p className="info">
                          {job.specialization}
                          <span>&bull;</span> <em className="date">{job.MonthOfLeaving} {job.YearOfLeaving}</em></p>
                          <p>
                          {job.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div> 
         </div>
      </section>
    );
  }
}