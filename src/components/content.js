import React from 'react'


const Content = ({children, border}) => (

<section className={`wrapper ${border ? 'border' : ''}`}>
  <div className="grid-wrapper">
    {children}
  </div>
</section>

)

export default Content