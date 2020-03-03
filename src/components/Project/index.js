import React from 'react'
import Carousel from 'nuka-carousel'

import { DownloadButton } from '..'
import './styles.css'

function Project({ app }) {
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
          <Carousel width="392px" autoplay={true} withoutControls={true}>
            {app.screenshotUrls && app.screenshotUrls.map((url, i) => (
              <img key={i} src={url} alt="Screenshot" />
            ))}
          </Carousel>
        </div>
      )}
    </div>
  )
}

export default Project
