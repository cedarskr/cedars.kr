import React from 'react'
import download from './img/download-black.svg'

function DownloadButton({ href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={download} alt="Download" />
    </a>
  )
}

export default DownloadButton
