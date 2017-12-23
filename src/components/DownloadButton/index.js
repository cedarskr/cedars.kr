import React from 'react'
import download from './img/download-black.svg'

const DownloadButton = ({ href }) => (
  <a href={href} target="_blank">
    <img src={download} alt="Download" />
  </a>
)

export default DownloadButton
