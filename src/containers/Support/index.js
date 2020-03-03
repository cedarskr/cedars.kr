import React from 'react'
import { LinkButton } from '../../components'
import './styles.css'

function Support() {
  return (
    <div className="Support" id="support">
      <header className="title">Contact Us</header>

      <div className="buttons">
        <LinkButton title="support@cedars.kr" href="mailto:support@cedars.kr" />
      </div>
    </div>
  )
}

export default Support
