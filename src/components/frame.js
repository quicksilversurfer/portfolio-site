import React from 'react'

import Footer from '../components/footer'

const Frame = ({file, children, about}) => (

  <div className={`frame ${about ? 'aboutPage' : ''}`}>
    {children}
    <Footer link={file}></Footer>
  </div>

)

export default Frame