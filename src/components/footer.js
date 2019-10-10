import React from 'react'

import Content from '../components/content'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => (

<Content>
<div className={footerStyles.footerWrapper}>
  <ul className={footerStyles.list}>
    <li className={footerStyles.listItem}><a href="mailto:hello@prateeksolanki.com" target="_blank" rel="noopener noreferrer" >hello@prateeksolanki.com</a></li>
    <li className={footerStyles.listItem}><a href="https://drive.google.com/file/d/1niAp1oRtI1iuCWAOmCkeyaesh78KRocv/view?usp=sharing" target="_blank" rel="noopener noreferrer" >Résumé</a></li>
    <li className={footerStyles.listItem}><a href="https://www.linkedin.com/in/prateek-solanki-78313218/" target="_blank" rel="noopener noreferrer" >LinkedIn</a></li>
    <li className={footerStyles.listItem}><a href="https://refind.com/quicksilvrsrfr" target="_blank" rel="noopener noreferrer" >Refind</a></li>
  </ul>
  <span className={footerStyles.peace} role="img" title="Made by Prateek Solanki with GatsbyJS" aria-label="peace">✌️</span>
</div>
</Content>

)

export default Footer
