import React from 'react'
import Content from '../components/content'
import PostShowcaseStyles from '../styles/postshowcase.module.scss'

// import { Link } from 'gatsby'

const PostShowcase = ({border, children}) => (

<Content>
    <h2 className={PostShowcaseStyles.heading}>Other Work</h2>
    {/* <Link to="/" className={PostShowcaseStyles.link}><span>View All</span></Link> */}
    {children}
</Content>

)

export default PostShowcase