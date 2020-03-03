import React, { useEffect, useState } from 'react'
import 'whatwg-fetch'

import appIDs from '../../common/appIDs'
import { Project } from '../../components'
import './styles.css'

function Projects() {
  const [apps, setApps] = useState(appIDs.map(appID => ({ id: appID })))

  useEffect(() => {
    fetch(`https://itunes.apple.com/lookup?id=${appIDs.join(',')}&entity=software`)
      .then(response => response.json())
      .then(json => {
        const results = json["results"] || []
        setApps(results.map(result => ({
          ...result,
          id: result.trackId,
        })))
      })
  }, [])

  return (
    <div className="Projects" id="projects">
      {apps.map(app => (
        <Project key={app.id} app={app} />
      ))}
    </div>
  )
}

export default Projects
