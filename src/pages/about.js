import React from 'react'
import Frame from '../components/frame'
import ImageCont from '../components/ImageCont'
import Header from '../components/header'

import AboutStyles from "../styles/about.module.scss"

import { graphql } from "gatsby"


const About = (props) => (


<Frame about>
  <Header about></Header>
  <div className={`grid-wrapper ${AboutStyles.aboutWrapper}`}>
    <div className={`span-12 ${AboutStyles.name}`}>
      Prateek Solanki
    </div>
    <div className={`span-12 ${AboutStyles.contact}`}>
      <div className={`span-3 ${AboutStyles.sectionHeading} ${AboutStyles.profileSection}`}>
        <ImageCont size="12" src={props.data.profilePhoto.childImageSharp.fluid} border="true"></ImageCont>
      </div>
      <div className={`span-6 ${AboutStyles.sectionDesc} ${AboutStyles.profileSection}`}>
        <p> 
          An Interaction designer with over 4 years of experience, I've played multiple roles and explored various domains throughout my career which has eventually brought me to my current role as a UX Designer in a healthcare company.   
        </p>
        <p>
          Born and brought up in India, I studied Mechatronics engineering in school, because I thought that it would give me the broadest introduction to how things are built, worked at an IT company so that I would learn how to make products on the Internet, and went to design school in Italy when I realized that design was my true calling. 
        </p>
        <p>
          These experiences, the people I've met, the cities where I've lived have shaped me, helped me learn about the world we inhabit and how each one of us can have an impact on the world we create for tomorrow.
        </p>
        <p>
          Design is the language through which I express the change I want to see in the world, and contribute to teams and people attempting to do the same.
        </p>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer" >hello@prateeksolanki.com ↗</a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer" >Résumé↓</a>
      </div>
    </div>

    <div className={`span-12 ${AboutStyles.aboutSection}`}>
      <h3 className="span-12">Work Experience</h3>
      <div className={`span-12 ${AboutStyles.contact}`}></div>
      <div className={`span-6 ${AboutStyles.sectionHeading}`}>
        <h4>Siemens Medical Solutions</h4>
        <h4>Sr. UX Designer</h4>
        <h5>November 2015 - Present</h5>
      </div>
      <div className={`span-6 ${AboutStyles.sectionDesc}`}>
        <p>
          My work at Siemens has been the most fulfilling part of my career, where I've executed the user-centered design process end to end for the design of medical devices and worked alongside some of the most thoughtful and kindest designers. Executing from within the trenches has helped me develop an understanding of what is needed at the each step of the process to deliver on great outcomes.
        </p>
        <p>
          The cross-discplinary experience in research, interaction design, visual design and development that I've gained in this role has certainly made me a better designer, but also made me aware of my gaps and continues to challenge me to evaluate and refine my process. 
        </p>
      </div>

      <div className={`span-6 ${AboutStyles.sectionHeading}`}>
        <h4>Siemens Medical Solutions</h4>
        <h4>Interaction Design Intern</h4>
        <h5>February 2015 - July 2015</h5>
      </div>
      <div className={`span-6 ${AboutStyles.sectionDesc}`}>
        <p>
          As an intern, I worked on the ACUSON Sequoia (Ultrasound system) project during the initial phases of research and concept development. Alongside the lead designers, I helped synthesize the research, develop UI concepts and built functional prototypes of an Ultrasound system for concept evaluations which would determine the design direction of the project. 
        </p>
      </div>

      <div className={`span-6 ${AboutStyles.sectionHeading}`}>
        <h4>Concept Nation</h4>
        <h4>UX Designer, Front End Developer</h4>
        <h5>September 2014 - December 2014</h5>
      </div>
      <div className={`span-6 ${AboutStyles.sectionDesc}`}>
        <p>
          Fresh out of design school, I worked on a short freelancing project for a startup in India, Concept Nation. The goal was to rethink how the current website was structured and refresh the visual design. I worked with founder to understand what he wanted to achieve with the redesign and delivered an updated front end of the platform built on top of the Bootstrap framework. 
        </p>
      </div>

      <div className={`span-6 ${AboutStyles.sectionHeading}`}>
        <h4>Fractal Ink Design Studios</h4>
        <h4>Front End Developer</h4>
        <h5>February 2013 - July 2013</h5>
      </div>
      <div className={`span-6 ${AboutStyles.sectionDesc}`}>
        <p>
          Fractal Ink was my first opportunity to work in a design team, and I worked as a front end developer to help build a real estate platform, eezyrent, designed in-house.
        </p>
      </div>
      <div className={`span-6 ${AboutStyles.sectionHeading}`}>
        <h4>Infosys Technologies Ltd.</h4>
        <h4>System Engineer / Test Engineer</h4>
        <h5>September 2010 - October 2012</h5>
      </div>
      <div className={`span-6 ${AboutStyles.sectionDesc}`}>
        <p>
          After my Undegraduate degree in Mechatronics, I joined Infosys as an opportunity to learn more about software development, and to work on digital products inspired by the Web 2.0 revoulution that was happening at the time.
        </p>
        <p>
          I discovered User Experience during my time at Infosys, through working with internal graphic design clubs, which is what eventually compelled me to leave and begin my journey in design.
        </p>
      </div>
    </div>

    <div className={`span-12 ${AboutStyles.aboutSection}`}>
      <h3 className="span-12">Education</h3>
      <div className={`span-12 ${AboutStyles.contact}`}></div>
      <div className={`span-6 ${AboutStyles.sectionHeading}`}>
        <h4>Domus Academy</h4>
        <h4>Master in Interaction Design</h4>
        <h5>August 2013 - July 2014</h5>
      </div>
      <div className={`span-6 ${AboutStyles.sectionDesc}`}>
        <p>
          At Domus, I got the chance to study under incredible course leaders, Claudio Moderini and Nima Gazestani and work with immensely talented batchmates from across the world. It exposed me to the process of design thinking, of how to concieve and build solutions that serve people's needs and contexts. It also instilled in me the attitude to constantly question the constraints and not be held back by what you don't know, as learning is the life-long process of what makes a good designer. 
        </p>
        <p>
          Besides the professional education I received, I am also grateful for how educative the experience was personally. Getting to discover another part of the world, alongside people with unique perspectives, and ideas I wasn't familiar with, has left a lasting impression on me.
        </p>
      </div>

      <div className={`span-6 ${AboutStyles.sectionHeading}`}>
        <h4>Manipal Institute of Technology</h4>
        <h4>B.E. in Mechatronics</h4>
        <h5>June 2006 - May 2010</h5>
      </div>
      <div className={`span-6 ${AboutStyles.sectionDesc}`}>
        <p>
          I chose Mechatronics Engineering, as the program was a combination of some of the most interesting courses taught in school. Bits of Mechanical, Electrical and Electronics engineering, giving a comprehensive overview of how machines are built and how they were going to be built in the future. 
        </p>
        <p>
          The relationships and memories from the 4 years in Manipal, are some of the most cherished ones and continue to bring joy into my life today.
        </p>
      </div>

    </div>
  </div>

  
</Frame>
)

export default About

export const pageQuery = graphql`
query  {
  profilePhoto: file(relativePath: { eq: "assets/images/photo.png" }) {
    childImageSharp {
      fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`