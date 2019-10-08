import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = ({ back, about }) => (
  <div className={`${headerStyles.header} ${about ? 'aboutPage' : ''}`}>
  <Link to='/' className={`${headerStyles.backWrapper} ${back ? headerStyles.back : ''}`}>
    <div className={headerStyles.arrow}></div>
  </Link>
  <Link to={`${about ? '/' : '/about/'}`} className={`${headerStyles.aboutWrapper} ${about ? 'about' : ''} `}>
  </Link>
  </div>
)

export default Header
