import React, { Component } from 'react';

export default  class Resume extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                this.props.data.education && this.props.data.education.map((datum)=>{
                  return(
                    <div className="row datum">
                       <div className="twelve columns">
                          <h3>{datum.UniversityName}</h3>
                          <p className="info">
                          {datum.specialization}
                          <span>&bull;</span> <em className="date">{datum.MonthOfPassing} {datum.YearOfPassing}</em></p>
                          <p>
                          {datum.Achievements}
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
                this.props.data.work && this.props.data.work.map((datum) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{datum.CompanyName}</h3>
                          <p className="info">
                          {datum.specialization}
                          <span>&bull;</span> <em className="date">{datum.MonthOfLeaving} {datum.YearOfLeaving}</em></p>
                          <p>
                          {datum.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {this.props.data.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  this.props.data.skills && this.props.data.skills.map((datum) => {
                    return(
                      <li>
                      <span className={`bar-expand ${datum.skillname.toLowerCase()}`}>
                      </span><em>{datum.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}