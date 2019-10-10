import React from 'react'
import Content from './content';
import PostUnitStyles from '../styles/postUnit.module.scss'

const PostUnit = ({title, border, children}) => (

  <Content border={border}>
    <section className={PostUnitStyles.wrapper}>
      <h3 className={PostUnitStyles.title}>{title}</h3>
      {children}
    </section>
  </Content>

)

export default PostUnit