import React from 'react'
import './styles.css'

function LinkButton({ title, href }) {
  return (
    <a className="LinkButton" href={href}>
      {title}
    </a>
  )
}

export default LinkButton
