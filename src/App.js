import React from 'react'
import 'es6-promise/auto'

import { Hero, Projects, Support } from './containers'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Support />
    </div>
  )
}

export default App
