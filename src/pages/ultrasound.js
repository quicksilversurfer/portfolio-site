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

const Ultrasound = (props) => (

<Frame>
  <SEO
    title="Ultrasound"
    description="End to end design execution for a complex medical device."
  ></SEO>
  <Header back></Header>
  <Intro 
  title="Ultrasound" 
  description="End to end design execution for a complex medical device."
  cover="true"
  border="true"
  ></Intro>

  <PostInfo
    context="Siemens Healthcare / Nov - 2015 to Feb - 2017"
    collaborators="Siemens Healthcare Design Team"
    contribution="Project Management, User Research, Interaction Design, Visual Design, Usability Testing "
  ></PostInfo>

  <PostUnit title="Summary">
    <p>
      As part of the User Experience Design team in Princeton, I collaborated with the Ultrasound business unit to reimagine the next generation of their premium systems which has now been released as the <a href="https://www.siemens-healthineers.com/en-us/ultrasound/new-era-ultrasound/acuson-sequoia" target="_blank" rel="noopener noreferrer">ACUSON Sequoia</a>.
    </p>
    <p>
      In this long running effort, I worked with designers on our team in Princeton, the Human Factors team, engineers and product managers at Ultrasound to bring a competitive and compelling product to market. The experience of working through the entire design process for such a complex medical device, by being deeply integrated with the product team, was an immensely enriching experience. It revealed the underlying complexity of what it takes to bring a medical device to market.
    </p>
  </PostUnit>

  <Blockquote>As a redesign of an existing system, there were two major challenges - one, understanding what already existed in the system, how people used it and why, and the second, how we could re-envision the experience to serve the current and future needs of our customers.</Blockquote>

  <PostUnit border="true">
    <p>
      Fresh out of school, and no clinical background whatsoever, the challenge was a tall order. We compensated for our lack of domain knowledge by relying on our design toolbox and sheer hard work. Together we conducted several research and evaluation sessions with physicians, sonographers and technologists around the world, focused on US, Germany and China, to learn about their workflows, their contexts, needs, likes and dislikes. 
    </p>
    <p>
      All the hard work has paid off, the ACUSON Sequoia has gone on to win the <a href="https://www.red-dot.org/project/acuson-sequoia-39373" target="_blank" rel="noopener noreferrer">Red Dot Award in 2019</a> for 'Product Design' and in an independent study by <a href="https://www.macadamian.com/" target="_blank" rel="noopener noreferrer">Macadamian</a>, a design consultancy, the system scored an 'A' grade System Usability Score (SUS) of 86, significantly better than the main competitors, along with reduced task time and higher ease of use ratings against comparable systems.
    </p>
  </PostUnit>

  <PostShowcase>
    <ProjectCard
      link="/shui/"
      projectCover={props.data.shui.childImageSharp.fluid}
      projectTitle="Shui"
      projectDesc="Developing design systems for increased internal productivity and user interface consistency."
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

export default Ultrasound

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
  shui: file(relativePath: { eq: "assets/images/shui-cover.png" }) {
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