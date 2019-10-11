import React from 'react'
import Content from '../components/content'
import ShowcaseStyles from '../styles/showcase.module.scss'

const Showcase = ({intro, border, number, children, sometimeago, awhileago}) => (

<Content border={border} sometimeago={sometimeago} awhileago={awhileago}>
    <h2 className={ShowcaseStyles.intro}>{intro}</h2>
    {children}
</Content>

)

export default Showcase