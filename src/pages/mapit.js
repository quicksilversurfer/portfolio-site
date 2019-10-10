import React from 'react'

import "../styles/styles.scss"

import Frame from '../components/frame'
import Intro from '../components/intro'
import Content from '../components/content'
import PostInfo from '../components/postInfo'
import PostUnit from '../components/postUnit'
import Blockquote from '../components/blockquote'
import ImageCont from '../components/ImageCont'
import PostShowcase from '../components/postShowcase'
import ProjectCard from '../components/projectCard'
import Header from '../components/header'

import { graphql } from "gatsby"
import SEO from '../components/seo'

const MapIt = (props) => (

<Frame>
  <SEO
    title="Map.it"
    description="A contextual navigation platform that helps you get things done and discover new experiences in your environment."
  ></SEO>
  <Header back></Header>
  <Intro 
  title="Map.it" 
  description="A contextual navigation platform that helps you get things done and discover new experiences in your environment."
  cover="true"
  border="true"
  ></Intro>

  <PostInfo
    context="Domus Academy / Feb. 2014 / 4 Weeks / Experience Design"
    collaborators="Rana Mansour, Tiago Boaventura"
    contribution="Research, Interaction Design, UI Design"
  ></PostInfo>

  <PostUnit title="Background">
    <p>Map.it is a concept part of a design brief called "Buy Mobile", that our Interaction Design batch tackled at Domus for the "Experience Design" course.</p>
  </PostUnit>

  <Blockquote>What needs do people have on the move and, how do they behave in the context of tranistory spaces and transportation systems?</Blockquote>

  <PostUnit title="Context">
    <p>What are transitory spaces? <a href="https://en.wikipedia.org/wiki/Marc_Aug%C3%A9" target="_blank" rel="noopener noreferrer">Marc Augé</a> offers some insights about these environments and refers to them as "non-places", a neologism coined in his work with the same title.</p>
    <p>He defines them as spaces of transcience where the human beings remain anonymous and that do not hold enough significance to be regarded as "places".</p>
    <p>He brings up the example of a passenger at the airport waiting in the lounge, there are thousands like him there but they are not related. He is only an element of the space governed by the rules of the environment that he is in. The space of non-place creates a neither singular identity nor relations, only solitude, and similitude.</p>
  </PostUnit>

  <PostUnit title="User Research">
    <p>We conducted contextual inquiries in Milano's transit system - metro stations and tram stops. Our goal was to understand a commuters needs, behaviors and also to capture what interactions and businesses these spaces were composed of.</p>
    <p>We developed three personas and tried to map their behaviors on activity maps that we created based on our contextual inquiries. These helped us in our progress to generate concepts and also analyze their potential effectiveness.</p>
  </PostUnit>
  <br/>

  <Content>
    <ImageCont size="4" src={props.data.personas.childImageSharp.fluid} caption="Personas (Illustrations by Hadar Geva"></ImageCont>
  </Content>
  <br/>
 
  <PostUnit>
    <p><b>Federica,</b> a freelancer who uses the transit system to go to meetings during the day at off-peak hours.</p>
    <p><b>Gianluigi,</b> a businessman and parent who uses the transit system to take his kids to school and get to work.</p>
    <p><b>Emilio,</b> a geek and young professional who uses the transit system at peak hours but has more free time and less stress.</p>
  </PostUnit>

  <Content>
    <ImageCont size="6" src={props.data.map_1.childImageSharp.fluid} caption="Visualizing activities of commuters in Milan's metro stations" border="true"></ImageCont>
    <ImageCont size="6" src={props.data.map_2.childImageSharp.fluid} caption="Persona behaviors" border="true"></ImageCont>
  </Content>

  <PostUnit title="Synthesis">
    <p>We derived some key insights from our research which we used as a guide during our ideation phase.</p>
    <ul>
      <li>
        <p>Most people were taking their daily commute from one particular station to another and almost never changed or modified their traveling route.</p>
      </li>
      <li>
        <p>People expect any digital service to be 'smart', one step ahead of their needs, helping them make their lives more efficient.</p>
      </li>
      <li>
        <p>Lastly, commuters hoped that new services can help them discover relevant products and not bombard them with advertising.</p>
      </li>
    </ul>
    <p>As we discussed our research and insights with our course leaders, a comment in one of our discussions made a lasting impression on me.</p>
  </PostUnit>

  <Blockquote>
    Commuters pass through parts of a city without being aware of what opportunities and experiences they have to offer. What if we could make these opportunities known?
  </Blockquote>

  <PostUnit>
    <p>I had also observed during our contextual inquiries that commuters often seemed bored, or occupied with activities they needed to fill their time with. There was certainly an opportunity to make better use of this time, and more importantly to make better use of their routes besides getting from point A to B.</p>
  </PostUnit>

  <PostUnit title="Concept">
    <p>We envision Map.it as a service which helps the user navigate their environment more contextually rather than just helping them get from point A to B. It does this by gathering information about a person's routines, and preferences gathered from other social platforms or as direct inputs from them.</p> 
  </PostUnit>

  <Content>
    <ImageCont size="12" src={props.data.feeesh.childImageSharp.fluid} caption="Concept cover image (Illustrations by Hadar Geva)" border="true"></ImageCont>
  </Content>

  <Content>
    <p class="span-6">When a user signs up for Map.it, the application integrates with existing social media accounts and automatically creates a wish list. The user may categorize and rank these items based on importance, or add new items.</p>
    <ImageCont size="6" src={props.data.mapit_13.childImageSharp.fluid}></ImageCont>
  </Content>

  <Content>
    <ImageCont size="6" src={props.data.mapit_23.childImageSharp.fluid}></ImageCont>
    <p class="span-6">As the user moves about, Map.it learns about the user's commute and important locations. Using this data the system can recommend new routes along which the user may be able to discover items on their wish list or get tasks done.</p>
  </Content>

  <Content>
    <p  class="span-6">Finally, if the user finds value in the route suggested, they can save it for future use. </p>
    <ImageCont size="6" src={props.data.mapit_33.childImageSharp.fluid}></ImageCont>
  </Content>

  <Content>
    <ImageCont size="12" src={props.data.workflow.childImageSharp.fluid} caption="Map.it User Flow"></ImageCont>
  </Content>

  <PostUnit title="Explorations">
    <p>Post-graduation, sometime in October 2014, I tried to formalize the application and design some key screens. I was curious about using Material Design language that had recently been released by Google and it seemed like a good exercise.</p>
  </PostUnit>

  <Content>
    <ImageCont size="6" src={props.data.screen1.childImageSharp.fluid}></ImageCont>
    <ImageCont size="6" src={props.data.screen3.childImageSharp.fluid}></ImageCont>
  </Content>

  <Content>
    <ImageCont size="6" src={props.data.screen4.childImageSharp.fluid}></ImageCont>
    <ImageCont size="6" src={props.data.screen5.childImageSharp.fluid}></ImageCont>
  </Content>

  <Content>
    <ImageCont size="6" src={props.data.screen6.childImageSharp.fluid}></ImageCont>
    <ImageCont size="6" src={props.data.screen7.childImageSharp.fluid}></ImageCont>
  </Content>

  <PostUnit title="Conclusion" border="true">
    <p>As a platform, Map.it attempts to capture a person's needs and lifestyle in one place and represents these interests on top their local environment. Rather than supporting a person in simply finding something, Map.it tries to intelligently suggest. Optimizing routes for people, helping them become more productive, efficient and aware of their surroundings and the possibilities that their cities offer.</p>
    <p>Users get appropriate solutions, optimized in a way that fits their schedule. Businesses have a chance to target a primed and distributed audience with a higher success rate for conversion. And for cities, a place to showcase it's rich history, culture and the interests of it's residents.</p>
  </PostUnit>

  <PostShowcase>
    <ProjectCard
      link="/draw-me-a-story/"
      projectCover={props.data.noldor.childImageSharp.fluid}
      projectTitle="Draw me a story"
      projectDesc="Interactive storytelling experience for children."
    ></ProjectCard>      
    <ProjectCard
      link="/ultrasound/"
      projectCover={props.data.ultrasound.childImageSharp.fluid}
      projectTitle="Ultrasound"
      projectDesc="End to end design execution for a complex medical device."
    ></ProjectCard>
  </PostShowcase>


  
</Frame>


)

export default MapIt

export const pageQuery = graphql`
query  {
  feeesh: file(relativePath: { eq: "assets/images/mapit/mapit_feeesh.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  map_1: file(relativePath: { eq: "assets/images/mapit/mapit_map-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  map_2: file(relativePath: { eq: "assets/images/mapit/mapit_map-2.jpg" }) {
  childImageSharp {
      fluid(maxWidth: 1226) {
      ...GatsbyImageSharpFluid
      }
    }
  }
  personas: file(relativePath: { eq: "assets/images/mapit/mapit_personas.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
        }
      }
  screen1: file(relativePath: { eq: "assets/images/mapit/mapit_screen1.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  screen2: file(relativePath: { eq: "assets/images/mapit/mapit_screen2.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  screen3: file(relativePath: { eq: "assets/images/mapit/mapit_screen3.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  screen4: file(relativePath: { eq: "assets/images/mapit/mapit_screen4.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  screen5: file(relativePath: { eq: "assets/images/mapit/mapit_screen5.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  screen6: file(relativePath: { eq: "assets/images/mapit/mapit_screen6.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  screen7: file(relativePath: { eq: "assets/images/mapit/mapit_screen7.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  screen8: file(relativePath: { eq: "assets/images/mapit/mapit_screen8.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  screen9: file(relativePath: { eq: "assets/images/mapit/mapit_screen9.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  screen10: file(relativePath: { eq: "assets/images/mapit/mapit_screen10.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  screen11: file(relativePath: { eq: "assets/images/mapit/mapit_screen11.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  workflow: file(relativePath: { eq: "assets/images/mapit/mapit_workflow.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  mapit_13: file(relativePath: { eq: "assets/images/mapit/mapit_13.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  mapit_23: file(relativePath: { eq: "assets/images/mapit/mapit-23.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  mapit_33: file(relativePath: { eq: "assets/images/mapit/mapit-33.png" }) {
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
  ultrasound: file(relativePath: { eq: "assets/images/ultrasound.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
      }
    }
}
`