'use strict'

import React, { Component } from 'react'
import ContentButtonCacamba from './components/content-button-cacamba'

class App extends Component {
  constructor () {
    console.log('constructor')
    super()
    this.timer
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        <ContentButtonCacamba />
      </div>
    )
  }

}

export default App
