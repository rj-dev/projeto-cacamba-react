'use strict'

import React, {Component} from 'react'
import ButtonCacamba from '../button'
import axios from 'axios'

class ContentButtonCacamba extends Component {
  constructor () {
    console.log('constructor-button')
    super()
    this.statusAtual = 0
    this.idCacamba = 0
    this.listaCacambas = []
  }

  componentWillMount () {
    console.log('componentWillMount-button')
    let component = this

    //this.setState({ listaCacambas: require('json!../cacambas.json') })
    // Performing a GET request
    // axios.get('./src/cacambas.json')
    //       .then(function (response) {
    //         component.setState({ listaCacambas: response.data })
    //         console.log(response.data)
    //         console.log(response.status) // ex.: 200
    //       })
  }

  componentDidMount () {
    this.statusAtual = setInterval(() => {
      this.setState = ({ statusAtual: this.updateStatusAtual(this.idCacamba) })
    }, 5000)
    console.log('componentDidMount-button')
  }

  getStatusCacamba (status) {
    switch (status) {
      case 1:
        return 'btn btn-info'
      case 0:
        return 'btn btn-success'
      case 2:
        return 'btn btn-warning'
      default:
        return ''
    }
  }

  updateStatusAtual (idCacamba) {
    return this.getStatusCacamba((Math.floor(Math.random() * (2 - 0 + 1) + 0)))
  }

  getDadosCacamba (idCacamba) {
    alert('Clicou na caçamba: ' + idCacamba)
  }

  getCacambas () {
    // const listCacambas = require('json!../cacambas.json')
    this.listaCacambas = require('json!../cacambas.json')
    // for (var i = 1; i <= 50; i++) {
    //   listCacambas.push({ idCacamba: i, statusCacamba: (Math.floor(Math.random() * (2 - 0 + 1) + 0)) })
    // }

    return this.listaCacambas.map((cacamba, index) => (
      <ButtonCacamba
        key={index}
        text={cacamba.idCacamba}
        handleClick={(e) => this.getDadosCacamba(cacamba.idCacamba)}
        statusCacamba={this.getStatusCacamba(cacamba.statusCacamba)} />
    ))
  }

  render () {
    console.log('render-button')
    return <div>{this.getCacambas()}</div>
  }

}

export default ContentButtonCacamba
