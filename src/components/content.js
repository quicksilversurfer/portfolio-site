import React from 'react'


const Content = ({children, border}) => (

<div className={`wrapper ${border ? 'border' : ''}`}>
  <div className="grid-wrapper">
    {children}
  </div>
</div>

)

export default Content