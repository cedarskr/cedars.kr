import React from 'react'
import 'es6-promise/auto'

import { Hero, Projects, Support } from './containers'
import './App.css'

const App = () => (
  <div className="App">
    <Hero />
    <Projects />
    <Support />
  </div>
)

export default App
