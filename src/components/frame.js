import React from 'react'

import Footer from '../components/footer'

const Frame = ({file, children, about, sometimeago, awhileago}) => (

  <div className={`frame ${about ? 'aboutPage' : ''} ${sometimeago ? 'sometimeago' : ''} ${awhileago ? 'awhileago' : ''}` }>
    {children}
    <Footer link={file}></Footer>
  </div>

)

export default Frame