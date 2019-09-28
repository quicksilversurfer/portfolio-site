import React from 'react'
import Content from './content';
import BlockquoteStyles from '../styles/blockquote.module.scss'

const Blockquote = ({children}) => (

  <Content>
    <div className={BlockquoteStyles.wrapper}>
      <blockquote>
        {children}
      </blockquote>
    </div>
  </Content>

)

export default Blockquote