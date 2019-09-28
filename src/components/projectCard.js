import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

import CardStyles from "../styles/projectCard.module.scss"

const ProjectCard = ({projectTitle, projectDesc, projectCover, link}) => (

<Link to={link} className={CardStyles.card}>
  <div>
      <Img className={CardStyles.cover} fluid={projectCover}></Img>
      <h3 className={CardStyles.title}>{projectTitle}</h3>
      <p className={CardStyles.desc}>{projectDesc}</p>
  </div>
</Link>

)

export default ProjectCard