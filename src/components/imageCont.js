import React from 'react'
// import Content from './content';
import Img from "gatsby-image"
import imageCont from '../styles/imageCont.module.scss'

const ImageCont = ({src, caption, size, border}) => (

    <div className={imageCont.wrapper} size={size} border={border}>
      <figure>
        <Img fluid={src}></Img>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>

)

export default ImageCont