import React from 'react'

import "../styles/styles.scss"

import Frame from '../components/frame'
import Intro from '../components/intro'
import Content from '../components/content'
import PostInfo from '../components/postInfo'
import PostUnit from '../components/postUnit'
import Blockquote from '../components/blockquote'
import ImageCont from '../components/imageCont'
import PostShowcase from '../components/postShowcase'
import ProjectCard from '../components/projectCard'
import Header from '../components/header'

import { graphql } from "gatsby"
import SEO from '../components/seo'

const Noldor = (props) => (

<Frame sometimeago>
  <SEO
    title="Draw Me A Story"
    description="An interactive storytelling experience for children combining activity books with an aspect of storytelling."
  ></SEO>
  <Header back></Header>
  <Intro 
  title="Draw Me A Story" 
  description="An interactive storytelling experience for children combining activity books with an aspect of storytelling."
  cover="true"
  border="true"
  ></Intro>

  <PostInfo
    context="Doums Academy / Jan. 2014 / 4 Weeks / Interaction Design Strategy and Business"
    collaborators="Interaction Design - Eray Alan, Me / Product Design - Dong Jin Ahn, Chih-Lung Yeh, Maissa Naim, Katayoun Pisheh"
    contribution="Research, Interaction Design, UI Design"
  ></PostInfo>

  <PostUnit title="Background">
    <p><a href="https://www.lovetherapy.it/en-love-therapy" target="_blank" rel="noopener noreferrer">Love Therapy</a> is a fashion brand started by Elio Fiorucci, a renowed fashion designer and founder of the Fiorucci fashion label. Kobalt Entertainment, our client, had acquired the rights to one of their most iconic characters, a gnome.</p>
    <p>We had to create, design and deliver innovative micro-experiences to Kobalt Entertainment, for the commercial use of the intellectual property rights from Love Therapy.</p>
  </PostUnit>

  <Blockquote>What could be some possible brand extensions and their connected spin-off micro-experiences using the Love Therapy brand?</Blockquote>

  <Content>
    <ImageCont size="6" src={props.data.gnome.childImageSharp.fluid} caption="The Love Therapy gnome. Image Courtesy:YOG"></ImageCont>
  </Content>

  <PostUnit title="Diverging">
    <p>We started by identifying the strengths of both Kobalt and Love Therapy in order to plot out opportunities that can be explored by their collaboration.</p>
  </PostUnit>

  <Content>
    <ImageCont size="6" src={props.data.init.childImageSharp.fluid} caption="Initial mind map explorations" border="true"></ImageCont>
  </Content>

  <PostUnit>
    <p>After our initial brainstorm, we came up with 4 different themes which we wanted to dive into further.</p>
    <ol>
      <li>Environment Tracking + Improvement</li>
      <li>Education</li>
      <li>Personal Health</li>
      <li>Social + Communication</li>
    </ol>
    <p>We researched the products and upcoming technologies and startups in these areas and tried to identify their potentials and shortcomings. For each sector chosen we came up with quick ideas during brainstorm sessions.</p>
    <p>We narrowed down our ideas and decided to focus in the direction of Education and Communication as we felt that this domain had opportunities that Kobalt Entertainment could leverage to their benefit.</p>
  </PostUnit>

  <Content>
    <ImageCont size="3" src={props.data.env.childImageSharp.fluid} caption="Environment Tracking + Improvement" border="true"></ImageCont>
    <ImageCont size="3" src={props.data.health.childImageSharp.fluid} caption="Education" border="true"></ImageCont>
    <ImageCont size="3" src={props.data.ed.childImageSharp.fluid} caption="Personal Health" border="true"></ImageCont>
    <ImageCont size="3" src={props.data.social.childImageSharp.fluid} caption="Social + Communication" border="true"></ImageCont>
  </Content>
 
  <PostUnit title="Converging">
    <p>After our exploration into various domains we decided that we would focus on Education and start with more concentrated research in that area.</p>
  </PostUnit>

  <Blockquote>Our aim was to make a digitally connected object which would help parents in educating and parenting children.</Blockquote>

  <PostUnit>
    <p>We identified some day-to-day activities that children engage in, which our solution could leverage as a basis for education or to support better parenting.</p>
  </PostUnit>

  <Content>
    <ImageCont size="6" src={props.data.opportunity.childImageSharp.fluid} caption="Opportunity areas, ideas around day-to-day activities of kids" border="true"></ImageCont>
  </Content>

  <PostUnit>
    <p>Some of the ideas we pursued were an experimentation kit for children, a digital toy similar to Tamagotchis and other digitally connected experiences. We dropped most of these realizing the business limitations required to develop these ideas, and also considering how they might fit into the Kobalt Entertainment portfolio.</p>
    <p>But as we dived deep into the research in the education sector we came across some interesting findings.</p>
  </PostUnit>

  <Content>
    <ImageCont size="4" src={props.data.trend1.childImageSharp.fluid} caption="Trends in book sales - TOC Bologna Research Findings 2013" border="true"></ImageCont>
    <ImageCont size="4" src={props.data.trend2.childImageSharp.fluid} caption="Activty trends for children" border="true"></ImageCont>
    <ImageCont size="4" src={props.data.trend3.childImageSharp.fluid} caption="Trends in children book sales - TOC Bologna Research Findings 2013" border="true"></ImageCont>
  </Content>

  <PostUnit title="Focusing">
    <p>Although activities of children are slowly changing and adopting digital tools, there is still a huge preference amongst parents for printed books. We visited several book stores and confirmed these insights by talking to parents who we met there. We also had discussions about what kind of expereinces they were looking for to share with their children and what's most important to them for their child's development.</p> 
  </PostUnit>

  <Content>
    <ImageCont size="9" src={props.data.visit.childImageSharp.fluid} caption="Book store visits" border="true"></ImageCont>
  </Content>

  <PostUnit>
    <p>Our excursions into bookstores gave us an opportunity to analyze some of the competitors in the childrens section and the different types of books that were sold. Browsing online marketplaces like the Amazon, iOS and, Android app stores, we took note of the top sellers in the educational app categories and tried to identify their biggest selling points.</p>
  </PostUnit>

  <Blockquote>
    Based on the research and the strengths of our client, we came up with the idea of building an interactive book for children with a digital counterpart.
  </Blockquote>

  <Content>
    <ImageCont size="6" src={props.data.comp.childImageSharp.fluid} caption="Competitor analysis" border="true"></ImageCont>
    <ImageCont size="6" src={props.data.target.childImageSharp.fluid} caption="Indentifying needs of our target audience - gathered from interviews and literature reviews" border="true"></ImageCont>
  </Content>

  <PostUnit title="Concept">
    <p>‘Draw Me A Story’ is a digital storytelling experience, which weaves in traditional paper based activities and games that children enjoy, in order to create a more enriching and personalized narrative.</p> 
  </PostUnit>

  <Blockquote>
    Our main intention with the solution was to create an experience where children were not just passive consumers but active contributors to the narrative of the story.  
  </Blockquote>

  <PostUnit>
    <p>Traditional activities and games like ‘Color the Scene’, ‘Connect the Dots’ or ‘Solve the Maze’ would contribute to the actual narrative and aesthetics of the story. The digital medium could also support novel forms of interaction like singing along with the character or recording your own song as the story played out.</p>
    <p>The end result would be a rich and highly personalized digital story that could be replayed and shared amongst family and friends.</p>
  </PostUnit>

  <PostUnit title="Design Artifacts">
    <p>The experience is composed of two main parts - the completion of the activity book and the storytelling experience available on mobile and tablets.</p> 
    <p>We envisioned the activity book experience to be an individual experience for the child, which would foster learning, focus and provide developmental benefits like hand eye coordintation. Children would be motivated by the fact that the effort they make in completing the activity book will be rewarded later with a storytelling experience.</p>
    <p>The storytelling experience could be a shared experience with the parent and child, where they would scan in the pages from the activity book to progress the narrative. For example, if the gnome is stuck in a labyrinth, the child would have to solve the maze which would allow the gnome to move on with the story. Similarly if the child colors a scene someway, the story could incorporate the color scheme into the story.</p>
    <p>We also thought of some interesting educational themes and gnome characters to develop stories.</p>
  </PostUnit>

  <Content>
    <ImageCont size="9" src={props.data.stories.childImageSharp.fluid} caption="Different stories for educating children about environemnts and behaviors. Illustrations sourced under Creative Commons (CC) license."></ImageCont>
  </Content>

  <PostUnit>
    <p><b>Gnome of the Forest - </b>to talk about animals and plants.</p>
    <p><b>Gnome of the Village - </b>to discuss living in a community and building relationships with different people.</p>
    <p><b>The Wizard Gnome - </b>who talks about science and maths.</p>
    <p><b>The Gnome of the House - </b>who teaches children good manners and repsect for parents.</p>
    <p>We developed a storyboard to illustrate this experience to our clients.</p>
  </PostUnit>

  <Content>
    <p class="span-6">Free content distributed on social networking platforms could engage parents in trying out the 'Draw Me a Story' series.</p>
    <ImageCont size="6" src={props.data.story1.childImageSharp.fluid} border="true"></ImageCont>
  </Content>

  <Content>
    <ImageCont size="6" src={props.data.story2.childImageSharp.fluid} border="true"></ImageCont>
    <p class="span-6">Simple activities, like the connect the dots could engage children and prompt parents to download the 'Draw Me a Story' app on their tablets.</p>
  </Content>

  <Content>
    <p class="span-6">Availability and advertising through the app, could provide easy access for parents to get more free or paid content.</p>
    <ImageCont size="6" src={props.data.story3.childImageSharp.fluid} border="true"></ImageCont>
  </Content>

  <Content>
    <p class="span-12">And made a short video to introduce the experience to our clients.</p>
    <iframe class="span-12" src="https://player.vimeo.com/video/101002068" width="640" height="362" frameborder="0" title="Draw Me a Story - Concept Video" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <p class="span-12">We also mocked up some of the key wireframes and interactions while taking into consideration the best practices for developing mobile apps for children.</p>
  </Content>

  <Content>
    <ImageCont size="6" src={props.data.app1.childImageSharp.fluid}></ImageCont>
    <ImageCont size="6" src={props.data.app2.childImageSharp.fluid}></ImageCont>
  </Content>

  <Content>
    <ImageCont size="6" src={props.data.app3.childImageSharp.fluid}></ImageCont>
    <ImageCont size="6" src={props.data.app4.childImageSharp.fluid}></ImageCont>
  </Content>

  <PostUnit title="Conclusion" border="true">
    <p>Draw Me a Story is an application that aims at meaningfully integrating digital products into a child's playtime activities. Combining traditional paper based activities that have a proven impact on focus and creativity with the magic of digital storytelling, Draw Me a Story makes for an engaging and educative experience for children.</p>
    <p>The shared experience of a parent and a child reading through the interactive story together also fosters closer relationships, builds family traditions and helps pass along values and beliefs.</p>
  </PostUnit>

  <PostShowcase>
    <ProjectCard
      link="/mapit"
      projectCover={props.data.mapit.childImageSharp.fluid}
      projectTitle="Map.it"
      projectDesc="Contextual navigation platform for productivity and exploration."
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

export default Noldor

export const pageQuery = graphql`
query  {
  gnome: file(relativePath: { eq: "assets/images/noldor/lt-gnome.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  init: file(relativePath: { eq: "assets/images/noldor/noldor_init.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  env: file(relativePath: { eq: "assets/images/noldor/noldor_env.png" }) {
  childImageSharp {
      fluid(maxWidth: 1226) {
      ...GatsbyImageSharpFluid
      }
    }
  }
  health: file(relativePath: { eq: "assets/images/noldor/noldor_health.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
        }
      }
  ed: file(relativePath: { eq: "assets/images/noldor/noldor_ed.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  social: file(relativePath: { eq: "assets/images/noldor/noldor_social.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  opportunity: file(relativePath: { eq: "assets/images/noldor/noldor_fun_map.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  trend1: file(relativePath: { eq: "assets/images/noldor/noldor_trend1.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  trend2: file(relativePath: { eq: "assets/images/noldor/noldor_trnd2.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  trend3: file(relativePath: { eq: "assets/images/noldor/noldor_trnd3.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  visit: file(relativePath: { eq: "assets/images/noldor/noldor_visit.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  comp: file(relativePath: { eq: "assets/images/noldor/noldor_comp.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  target: file(relativePath: { eq: "assets/images/noldor/noldor_target.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  stories: file(relativePath: { eq: "assets/images/noldor/noldor_stories.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  story1: file(relativePath: { eq: "assets/images/noldor/noldor_story1.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  story2: file(relativePath: { eq: "assets/images/noldor/noldor_story2.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  story3: file(relativePath: { eq: "assets/images/noldor/noldor_story3.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  app1: file(relativePath: { eq: "assets/images/noldor/noldor_app1.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  app2: file(relativePath: { eq: "assets/images/noldor/noldor_app2.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  app3: file(relativePath: { eq: "assets/images/noldor/noldor_app3.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  app4: file(relativePath: { eq: "assets/images/noldor/noldor_app4.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  mapit: file(relativePath: { eq: "assets/images/mapit.jpg" })  {
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