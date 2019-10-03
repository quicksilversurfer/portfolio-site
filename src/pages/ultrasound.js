import React from 'react'

import Frame from '../components/frame'
import Intro from '../components/intro'
import Content from '../components/content'
import PostInfo from '../components/postInfo'
import PostUnit from '../components/postUnit'
import ImageCont from '../components/ImageCont'
import Blockquote from '../components/blockquote'
import PostShowcase from '../components/postShowcase'
import ProjectCard from '../components/projectCard'

import { graphql } from "gatsby"

const Ultrasound = (props) => (

<Frame>
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
      In this long running effort, I worked with designers on our team in Princeton, the Human Factors team, engineers and product managers at Ultrasound to bring a competitive and compelling product to market. The experience of working through the entire design process for such a complex medical device by being deeply integrated with the product team was an immensely enriching experience, and it revealed the underlying complexity of what it takes to bring a medical device to market.
    </p>
    <Blockquote>As a redesign of an existing system, there were two major challenges - one, understanding what already existed in the system, how people used it and why, and the second, how we could re-envision the experience to serve the current and future needs of our customers.</Blockquote>
    <p>
      Fresh out of school, and no clinical background whatsoever, the challenge was a tall order. We compensated for our lack of domain knowledge by relying on our design toolbox and sheer hard work. Together we conducted several research and evaluation sessions with physicians, sonographers and technologists around the world, focused on US, Germany and China, to learn about their workflows, their contexts, needs, likes and dislikes. 
    </p>
    <p>
      All the hard work has paid off, the ACUSON Sequoia has gone on to win the <a href="https://www.red-dot.org/project/acuson-sequoia-39373" target="_blank" rel="noopener noreferrer">Red Dot Award in 2019</a> for product design and in an independent study by <a href="https://www.macadamian.com/" target="_blank" rel="noopener noreferrer">Macadamian</a>, a design consultancy, the system scored a System Usability Score (SUS) of 79, significantly better than the main competitors, reducing task time and scoring higher ease of use ratings against comparable systems.
    </p>
  </PostUnit>

  <PostUnit title="Reflections" border="true">
    <p>Developing a big platform like eezyrent definitely helped improve my front end skills and gave me a deeper understanding of the development process. The importance of identifying the core components and structuring the code to enable reusability is essential in creating a light and maintenable code base.</p>
    <p>It was a lot of fun building the website from the ground up and seeing the project slowly take shape. I contributed to the experience by proposing and including some motion and animations in the interactions. My dedication to stay as close as possible to the integrity of the visual design was one thing that noticed and appreciated by my design colleagues.</p>
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
      projectDesc="End to end design execution for an Ultrasound system."
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
  ultrasound: file(relativePath: { eq: "assets/images/ultrasound.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
}
`