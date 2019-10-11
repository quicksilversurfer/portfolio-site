import React from 'react'


const Content = ({children, border, sometimeago, awhileago}) => (

<section className={`wrapper ${border ? 'border' : ''} ${sometimeago ? 'sometimeago' : ''} ${awhileago ? 'awhileago' : ''}`}>
  <div className="grid-wrapper">
    {children}
  </div>
</section>

)

export default Content