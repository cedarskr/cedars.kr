import React, { Component } from 'react'
import 'isomorphic-fetch'

import appIDs from '../../common/appIDs'
import { Project } from '../../components'
import './styles.css'

class Projects extends Component {
  constructor() {
    super()

    this.state = { apps: appIDs.map(appID => ({ id: appID })) }

    this.fetch()
  }

  fetch() {
    let { apps } = this.state

    fetch(`https://itunes.apple.com/lookup?id=${appIDs.join(',')}`)
      .then(response => response.json())
      .then(json => {
        const results = json["results"] && json["results"]

        results.forEach(result => {
          apps = apps.map(app => {
            return (app.id === result.trackId) ? { ...app, ...result } : app
          })
        })

        this.setState({ apps })
      })
  }

  render() {
    const { apps } = this.state

    return (
      <div className="Projects" id="projects">
        {apps.map(app => (
          <Project key={app.id} app={app} />
        ))}
      </div>
    )
  }
}

export default Projects
