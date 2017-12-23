import React from 'react'
import './styles.css'

const LinkButton = ({ title, href }) => (
  <a className="LinkButton" href={href}>
    {title}
  </a>
)

export default LinkButton
