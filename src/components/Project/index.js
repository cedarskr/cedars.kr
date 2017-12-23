import React from 'react'

import { DownloadButton } from '..'
import './styles.css'

const Project = ({ app }) => {
  const descriptions = app.description && app.description.split('\n')

  return (
    <div className="Project">
      <div className="left">
        <div className="title">
          {app.trackName}
        </div>

        {descriptions && descriptions.length > 0 && (
          <div className="description">
            {descriptions[0]}
          </div>
        )}

        <div className="download">
          <DownloadButton href={app.trackViewUrl} />
        </div>
      </div>

      {app.screenshotUrls && (
        <div className="phone">
          {app.screenshotUrls && app.screenshotUrls.map((url, i) => (
            i === 0 ? <img key={i} src={url} alt="Screenshot" /> : null
          ))}
        </div>
      )}
    </div>
  )
}

export default Project
