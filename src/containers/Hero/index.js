import React from 'react'

import { LinkButton } from '../../components'
import './styles.css'
import logo from './img/logo.svg'

function Hero() {
  return (
    <div className="Hero">
      <header className="logo">
        <img src={logo} alt="Cedars" />
      </header>

      <div className="description">
        시더스는 백향목을 의미합니다.
        백향목은 짙은 향기를 풍겨서 향기롭고 충해가 없으며 견고한 내구력을 가지고 있어 좋은 건축재로 사용됩니다.
        공동체를 위한 모바일 어플리케이션, 웹 서비스를 기획/개발합니다.
      </div>

      <div className="buttons">
        <LinkButton title="Projects" href="#projects" />
        <LinkButton title="Contact Us" href="#support" />
      </div>
    </div>
  )
}

export default Hero
