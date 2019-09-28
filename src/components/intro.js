import React from 'react'

import Content from '../components/content'

import introStyles from  "../styles/intro.module.scss"

const Intro = ({title, description, border, cover, children}) => (

<Content border={border} >
  <div cover={cover} className={introStyles.intro}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <div className={introStyles.content}>{children}</div>
  </div>
</Content>

)

export default Intro