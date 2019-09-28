import React from 'react'

import Frame from '../components/frame'
import Intro from '../components/intro'
import Content from '../components/content'
import PostInfo from '../components/postInfo'
import PostUnit from '../components/postUnit'
import ImageCont from '../components/ImageCont'
import PostShowcase from '../components/postShowcase'
import ProjectCard from '../components/projectCard'

import { graphql } from "gatsby"

const FractalInk = (props) => (

<Frame>
  <Intro 
  title="eezyrent" 
  description="A platform for renting and buying spaces, that have been recommended or upvoted by a person's network of friends."
  cover="true"
  border="true"
  ></Intro>

  <PostInfo
    context="Fractal Ink Design Studio / Feb - 2013 / Front-End Development"
    collaborators="Design - Tanay Kumar, Sreekant Gopalakrishnan, Amit Rajapurkar"
    contribution="Front-End Development"
  ></PostInfo>

  <PostUnit title="Background">
    <p> <a href="https://www.eezyrent.com/" target="_blank" rel="noopener noreferrer">eezyrent</a>  is a startup simplifying space rentals in India, primarily Mumbai. I was the front end developer on the team and solely responsible for creating the front end of the entire platform using HTML5, CSS3 and jQuery libraries.</p>
    <p>It was a client facing role, where I got the chance to work with stakeholders, make updates to the design as the project progressed and worked with the back-end development team to ensure a smooth and seamless integration.</p>
    <p>eezyrent launched in mid of 2013 and are continuing their mission to provide effortless rentals. You can find them here but the original design has since been updated.</p>
  </PostUnit>

  <Content>
    <ImageCont size="12" src={props.data.cover.childImageSharp.fluid} caption="eezyrent - home page and listing pages" border="true"></ImageCont>
    <ImageCont size="12" src={props.data.profile.childImageSharp.fluid} caption="eezyrent - home page and listing pages" border="true"></ImageCont>
  </Content>

  <PostUnit title="Reflections" border="true">
    <p>Developing a big platform like eezyrent definitely helped improve my front end skills and gave me a deeper understanding of the development process. The importance of identifying the core components and structuring the code to enable reusability is essential in creating a light and maintenable code base.</p>
    <p>It was a lot of fun building, seeing the project slowly take shape and I tried to contribute by trying out and including some motion and animations in the interactions. Something that the designers were defintely pleased with was my dedication to stay as close as possible to the original mockups.</p>
  </PostUnit>

  <PostShowcase>
    <ProjectCard
      link="/shui/"
      projectCover={props.data.shui.childImageSharp.fluid}
      projectTitle="Shui"
      projectDesc="Developing design systems for increased internal productivity and user interface consistency."
    ></ProjectCard>      
    <ProjectCard
      link="/ultrasound/"
      projectCover={props.data.ultrasound.childImageSharp.fluid}
      projectTitle="Ultrasound"
      projectDesc="Developing design systems for increased internal productivity and user interface consistency."
    ></ProjectCard>
  </PostShowcase>


  
</Frame>


)

export default FractalInk

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
  shui: file(relativePath: { eq: "assets/images/shui-cover.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  ultrasound: file(relativePath: { eq: "assets/images/ultrasound.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
}
`