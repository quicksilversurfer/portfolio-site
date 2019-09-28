import React from 'react'

import Footer from '../components/footer'

const Frame = ({file, children}) => (

  <div className="frame">
    {children}
    <Footer link={file}></Footer>
  </div>

)

export default Frame