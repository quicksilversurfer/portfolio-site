import React from 'react'

import Frame from '../components/frame'
import Intro from '../components/intro'
import Content from '../components/content'
import PostInfo from '../components/postInfo'
import PostUnit from '../components/postUnit'
import Blockquote from '../components/blockquote'
import ImageCont from '../components/ImageCont'
import PostShowcase from '../components/postShowcase'
import ProjectCard from '../components/projectCard'

import { graphql } from "gatsby"

const ConceptNation = (props) => (

<Frame>
  <Intro 
  title="Concept Nation" 
  description="A social platform for people to discover and buy custom artwork, and for artists to display and sell their artwork online."
  cover="true"
  border="true"
  ></Intro>

  <PostInfo
    context="Freelance / Sep - 2014 / 4 months"
    collaborators="Founder - Vibhu Pillai, Backend Dev - Vineeth Venugopal"
    contribution="UX, UI Design and Front-End Development"
  ></PostInfo>

  <PostUnit title="Background">
    <p>Concept Nation is a startup in India whose mission is to become a platform for people to share and discover ideas that are popular in the zeitgeist and a space for artists to sell and promote their work.</p>
    <p>General users, 'Citizens' can create concepts based on a theme where 'Artists' can post their relevant artwork into. Concepts are ideas and a collection of artwork based around a theme, anything from general topics like nature, moods and social issues to private topics like personal events.</p>
    <p>Vibhu, the founder, approached me initially to update the current design, since Concept Nation had been up for some time and was getting some traction. There were also issues with users understanding the value proposition of the platform which he also wanted to address.</p>
  </PostUnit>

  <Blockquote>The goal was to further develop the MVP, setting up a foundation for further explorations and understand where the real value of the platform lay.</Blockquote>

  <PostUnit title="Diverging">
    <p>We started by identifying the strengths of both Kobalt and Love Therapy in order to plot out opportunities that can be explored by their collaboration.</p>
  </PostUnit>

  <Content>
    <ImageCont size="6" src={props.data.analytics.childImageSharp.fluid} caption="Concept Nation Analytics - Audience Duration Times" border="true"></ImageCont>
  </Content>

  <PostUnit>
    <p><b>Lots of drop offs from the landing page - </b>Call to Actions weren't strong enough or the page wasn't engaging for the user.</p>
    <p><b>High drop offs from the shop page - </b>People did not understand the associated social platform.</p>
    <p><b>Less than 1 % of users were creating concepts - </b>Lack of clarity about how the platform worked.</p>
    <p><b>Primarily referral traffic - </b>Users were engaging on social platforms, and were coming in directly to internal pages.</p>
    <p><b>Users voted Artwork - </b>Users engaged with interactions they understood.</p>
    <p><b>Users following Artists - </b>Users engaged with interactions they understood.</p>
  </PostUnit>

  <Content>
    <ImageCont size="3" src={props.data.prev1.childImageSharp.fluid} caption="Original Landing Page" border="true"></ImageCont>
    <ImageCont size="3" src={props.data.prev2.childImageSharp.fluid} caption="Orginal Artwork Listing Page" border="true"></ImageCont>
    <ImageCont size="3" src={props.data.prev3.childImageSharp.fluid} caption="Orginal Shop Page" border="true"></ImageCont>
  </Content>

  <PostUnit>
    <p>I also did an assessment of the current design to become familiar with the UI and information architecture to identify areas where we could quickly improve upon. I identified the following areas which needed to be tackled -</p>
    <p><b>Create navigational structures</b>that help the user identify content (concept vs. artwork) and understand where they are in the platform.</p>
    <p><b>Create a consistent and scalable visual language</b> by harmonizing the layout, the use of color, typography.</p>
    <p>Lastly, <b>allow for serendipitous discovery</b>by showcasing relevant content at the right places in a user's journey.</p>
  </PostUnit>

  <PostUnit title="Building">
    <p>Understanding that we wanted to communicate the platforms mission to the audience, I developed some wireframes to communicate my approach to Vibhu and soon after started building. We performed some quick iterations on the visual design and had something that we were satisfied with quite early.</p>
    <p>I built the application using Bootstrap framework, as it was the most updated and modern web framework at the time. We managed to get a lot of work completed, part of which is shown below.</p>
  </PostUnit>

  <Content>
    <ImageCont size="6" src={props.data.listing.childImageSharp.fluid} caption="Concept Listing Page" border="true"></ImageCont>
    <ImageCont size="6" src={props.data.artwork.childImageSharp.fluid} caption="Artwork Listing Page" border="true"></ImageCont>
    <ImageCont size="6" src={props.data.artist.childImageSharp.fluid} caption="Artist Listing Page" border="true"></ImageCont>
    <ImageCont size="6" src={props.data.dashboard.childImageSharp.fluid} caption="Artist Dashboard Page" border="true"></ImageCont>
    <ImageCont size="6" src={props.data.shop.childImageSharp.fluid} caption="Shop Page" border="true"></ImageCont>
    <ImageCont size="6" src={props.data.details.childImageSharp.fluid} caption="Concept Details Page" border="true"></ImageCont>
  </Content>

  <PostUnit title="Conclusion" border="true">
    <p>Draw Me a Story is an application that aims at meaningfully integrating digital products into a child's playtime activities. Combining traditional paper based activities that have a proven impact on focus and creativity with the magic of digital storytelling, Draw Me a Story makes for an engaging and educative experience for children.</p>
    <p>The shared experience of a parent and a child reading through the interactive story together also fosters closer relationships, builds family traditions and helps pass along values and beliefs.</p>
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

export default ConceptNation

export const pageQuery = graphql`
query  {
  analytics: file(relativePath: { eq: "assets/images/conceptnation/analytics-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  prev1: file(relativePath: { eq: "assets/images/conceptnation/prev-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  prev2: file(relativePath: { eq: "assets/images/conceptnation/prev-3.jpg" }) {
  childImageSharp {
      fluid(maxWidth: 1226) {
      ...GatsbyImageSharpFluid
      }
    }
  }
  prev3: file(relativePath: { eq: "assets/images/conceptnation/prev-4.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
        }
      }
  listing: file(relativePath: { eq: "assets/images/conceptnation/concept_listing.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  artwork: file(relativePath: { eq: "assets/images/conceptnation/artwork_listing.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  artist: file(relativePath: { eq: "assets/images/conceptnation/artist_listing.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  dashboard: file(relativePath: { eq: "assets/images/conceptnation/artist_dashboard.png" }) {
      childImageSharp {
          fluid(maxWidth: 1226) {
          ...GatsbyImageSharpFluid
          }
          }
      }
  shop: file(relativePath: { eq: "assets/images/conceptnation/shop_page.png" }) {
    childImageSharp {
        fluid(maxWidth: 1226) {
        ...GatsbyImageSharpFluid
        }
        }
    }
  details: file(relativePath: { eq: "assets/images/conceptnation/concept_details.png" }) {
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