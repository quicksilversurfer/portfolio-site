import React from 'react'

import Content from '../components/content'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => (

<Content>
<div className={footerStyles.footerWrapper}>
  <ul className={footerStyles.list}>
    <li className={footerStyles.listItem}><a href="http://google.com" target="_blank" rel="noopener noreferrer" >hello@prateeksolanki.com</a></li>
    <li className={footerStyles.listItem}><a href="./static/Resume_Prateek_Solanki-afdfbdbe79aeb92113b234f1a4dfd4d1.pdf" target="_blank" rel="noopener noreferrer" >Résumé</a></li>
    <li className={footerStyles.listItem}><a href="http://google.com" target="_blank" rel="noopener noreferrer" >LinkedIn</a></li>
    <li className={footerStyles.listItem}><a href="http://google.com" target="_blank" rel="noopener noreferrer" >Refind</a></li>
  </ul>
  <span className={footerStyles.peace} role="img" title="Made by Prateek Solanki with GatsbyJS" aria-label="peace">✌️</span>
</div>
</Content>

)

export default Footer