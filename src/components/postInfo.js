import React from 'react'
import Content from './content';
import PostInfoStyles from '../styles/postInfo.module.scss'

const PostInfo = ({context, collaborators, contribution}) => (

  <Content>
    <div className={PostInfoStyles.wrapper}>
      <div className={PostInfoStyles.infoWrapper}>
        <h5>Context</h5>
        <p class="small">{context}</p>
      </div>
      <div className={PostInfoStyles.infoWrapper}>
        <h5>Collaborators</h5>
        <p class="small">{collaborators}</p>
      </div>
      <div className={PostInfoStyles.infoWrapper}>
        <h5>Contribution</h5>
        <p class="small">{contribution}</p>
      </div>
    </div>
  </Content>

)

export default PostInfo