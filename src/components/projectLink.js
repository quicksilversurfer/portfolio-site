import React from 'react'
import Img from "gatsby-image"

import LinkStyles from "../styles/projectLink.module.scss"

const ProjectLink = ({projectTitle, projectDesc, link, linkCover}) => (

  <a href={link} className={LinkStyles.link} target="_blank" rel="noopener noreferrer">
      <Img className={LinkStyles.cover} fluid={linkCover}></Img>
      <h4 className={LinkStyles.title}>{projectTitle}</h4>
      <p className={LinkStyles.desc}>{projectDesc}</p>

  </a>


)

export default ProjectLink