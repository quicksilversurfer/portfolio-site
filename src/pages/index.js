import React from 'react'

import "../styles/styles.scss"

import Frame from '../components/frame'
import Intro from '../components/intro'
import Showcase from '../components/showcase'
import ProjectCard from '../components/projectCard'
import Header from '../components/header'
import SEO from '../components/seo'

import { graphql } from "gatsby"

const IndexPage = (props) => (
  <Frame>
    <SEO
      title="Portfolio"
      description="Interaction Design portfolio of Prateek Solanki. A UX Designer at Siemens Healthineers."
    ></SEO>
    <Header></Header>
    <Intro
      title="Hello, I'm Prateek" 
      description="I am an Interaction Designer at Siemens Healthcare, where I help design and build medical device interfaces."
      border="true"
      cover="true"
    ></Intro>

    <Showcase intro="At Siemens, I've gained experience in end to end design execution and project management for complex medical devices." border>
      <ProjectCard
        link="/shui/"
        projectCover={props.data.shui.childImageSharp.fluid}
        projectTitle="Shui"
        projectDesc="Developing design systems for user interface consistency and increased internal productivity."
      ></ProjectCard>      
      <ProjectCard
        link="/ultrasound/"
        projectCover={props.data.ultrasound.childImageSharp.fluid}
        projectTitle="Ultrasound"
        projectDesc="End to end design execution for a complex medical device."
      ></ProjectCard>
    </Showcase>

    <Showcase intro="Domus Academy was my first formal introduction to design thinking, where I had the chance to create innovative and pragmatic solutions to broad and challenging design briefs." border>
      <ProjectCard
        link="/draw-me-a-story/"
        projectCover={props.data.noldor.childImageSharp.fluid}
        projectTitle="Draw me a story"
        projectDesc="Interactive storytelling experience for children."
      ></ProjectCard>
      <ProjectCard
        link="/mapit"
        projectCover={props.data.mapit.childImageSharp.fluid}
        projectTitle="Map.it"
        projectDesc="Contextual navigation platform for productivity and exploration."
      ></ProjectCard>
    </Showcase>

    <Showcase intro="Web development helped me get into design, and it has been an invaluable skill for my design process, giving me perspective and helping me appreciate the technical details of things." border>
      <ProjectCard
        link="/concept-nation/"
        projectCover={props.data.conceptnation.childImageSharp.fluid}
        projectTitle="Concept Nation"
        projectDesc="UI design and front end development for a e-commerce / creative collaboration startup in India."
      ></ProjectCard>
      <ProjectCard
        link="/fractalink/"
        projectCover={props.data.eezyrent.childImageSharp.fluid}
        projectTitle="eezyrent"
        projectDesc="Front end development of an online platform for discovering and renting housing in India."
      ></ProjectCard>
    </Showcase>

    <Intro description="Design is a combination of problem solving and expression.">
      <p>Of function and form, of logic and of feeling. I believe solutions for people are built through empathy and understanding of their needs and contexts. I enjoy this journey of discovery and collaboration that helps create these solutions, ultimately trying to make someone's life simpler, easier and more delightful. I'm learning from it both professionally and personally.</p>
      <p>Thanks for visiting! <span role="img" class="big" aria-label="cheers">🍻</span> </p>
    </Intro>

  </Frame>

)

export default IndexPage

export const pageQuery = graphql`
  query  {
    shui: file(relativePath: { eq: "assets/images/shui-cover.png" }) {
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
    mapit: file(relativePath: { eq: "assets/images/mapit.jpg" }) {
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
    conceptnation: file(relativePath: { eq: "assets/images/conceptnation_cover.png" }) {
        childImageSharp {
            fluid(maxWidth: 1226) {
            ...GatsbyImageSharpFluid
            }
            }
        }
    eezyrent: file(relativePath: { eq: "assets/images/eezyrent_cover.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  }
`
 
