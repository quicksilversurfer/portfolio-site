import React from 'react'

import Frame from '../components/frame'
import Intro from '../components/intro'
import PostInfo from '../components/postInfo'
import PostUnit from '../components/postUnit'
import Blockquote from '../components/blockquote'
import PostShowcase from '../components/postShowcase'
import ProjectCard from '../components/projectCard'
import Header from '../components/header'
import SEO from '../components/seo'

import { graphql } from "gatsby"

const Shui = (props) => (

<Frame>
  <SEO
    title="SHUI - Siemens Healthineers User Interface"
    description="Developing design systems for user interface consistency and increased internal productivity."
  ></SEO>
  <Header back></Header>
  <Intro 
  title="SHUI" 
  description="Developing design systems for user interface consistency and increased internal productivity."
  cover="true"
  border="true"
  ></Intro>

  <PostInfo
    context="Siemens Healthcare / Nov - 2017 to Present"
    collaborators="Siemens Healthcare Design Team, IDEO"
    contribution="Interaction Design, Visual Design, Front-End Development"
  ></PostInfo>

  <PostUnit title="Summary">
    <p>
      SHUI - Siemens Healthineers User Interface, is a design system born out of the need to harmonize the interfaces for the vast product portfolio that Siemens Healthineers offers. 
    </p>
    <p>
      Over time, product interfaces that originally began from the same foundation have become visually and behaviorally different, and in 2017 when the healthcare group of Siemens was spun off as a new company, there was an opportunity to re-align and build a cohesive experience across all it's products. 
    </p>
    <p>
      Siemens Healthineers is a large company which offers several hardware and software solutions in domains such as 'Imaging & Therapy Systems', 'Clinical Products' and 'Labratory Diagnostics'. With several products in each of these categories, supporting multiple user profiles, use cases and interaction mediums, creating a cohesive design system that can be applied at scale is a complex problem.   
    </p>
  </PostUnit>

  <Blockquote>
    The challenge with SHUI is to create a design system that can span different product classes, support multiple clients from desktop to in-built interfaces on hardware, and be easy to apply for complex and critical work environments. 
  </Blockquote>

  <PostUnit border="true">
    <p>
      I am part of a small design team working towards scaling the design system to cover use cases for existing flagship products and products that are planned to roll out in the future. 
    </p>
    <p>
      Being part of this project since it's conception, it's been a great growth opportunity for me with respect to thinking about visual design systems at scale, deeper understanding of the organization and how it is structured, and the workflows and use cases of some of our key products and services. 
    </p>
    <p>
      After the initial release of the project internally, we were validated that this was a step in the right direction when SHUI received the <a href="https://www.red-dot.org/project/shui-siemens-healthineers-user-interface-25965" target="_blank" rel="noopener noreferrer">'Communication Design'</a> award from Red Dot in 2018.
    </p>
  </PostUnit>

  <PostShowcase>
    <ProjectCard
      link="/ultrasound/"
      projectCover={props.data.ultrasound.childImageSharp.fluid}
      projectTitle="Ultrasound"
      projectDesc="End to end design execution for a complex medical device."
    ></ProjectCard>   
    <ProjectCard
      link="/draw-me-a-story/"
      projectCover={props.data.noldor.childImageSharp.fluid}
      projectTitle="Draw me a story"
      projectDesc="Interactive storytelling experience for children."
    ></ProjectCard>
  </PostShowcase>


  
</Frame>


)

export default Shui

export const pageQuery = graphql`
query  {
  cover: file(relativePath: { eq: "assets/images/fractalink/eezyrent.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  profile: file(relativePath: { eq: "assets/images/fractalink/eezyrent-profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  ultrasound: file(relativePath: { eq: "assets/images/ultrasound.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  noldor: file(relativePath: { eq: "assets/images/noldor_cover.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
}
`