'use strict'

import React, {Component} from 'react'
import ButtonCacamba from '../button'
import axios from 'axios'

class ContentButtonCacamba extends Component {
  constructor () {
    console.log('constructor-button')
    super()
    this.statusAtual = 0
    this.state = {
      listaCacambas: []
    }
  }

  componentWillMount () {
    console.log('componentWillMount-button')
    // this.setState({ listaCacambas: require('json!../cacambas.json') })
  }

  componentDidMount () {

    let selfContext = this
    // Performing a GET request
    axios.get('./src/cacambas.json')
           .then(response => {
             //const listaCacambas = response.data.map(obj => obj.data)
             this.setState({ listaCacambas : response.data})
             // console.log(response.data)
             // console.log(response.status) // ex.: 200
           })

    this.statusAtual = setInterval(() => {
      this.state.listaCacambas.map((cacamba, index) => (
      this.statusAtual = this.updateStatusAtual(cacamba.idCacamba)
      ))
    }, 5000)

    console.log('componentDidMount-button')
  }

  updateStatusAtual (idCacamba) {
    return this.getStatusCacamba((Math.floor(Math.random() * (2 - 0 + 1) + 0)))
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

  getDadosCacamba (idCacamba) {
    alert('Clicou na caçamba: ' + idCacamba)
  }

  getCacambas () {
    // const listCacambas = require('json!../cacambas.json')
    // this.listaCacambas = require('json!../cacambas.json')
    // for (var i = 1; i <= 50; i++) {
    //   listCacambas.push({ idCacamba: i, statusCacamba: (Math.floor(Math.random() * (2 - 0 + 1) + 0)) })
    // }
     return this.state.listaCacambas.map((cacamba, index) => (
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
