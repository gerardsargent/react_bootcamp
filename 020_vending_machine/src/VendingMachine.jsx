import React, { Component } from 'react'
import Border from './Border'

export default class VendingMachine extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <Border>
        <div
          className="VendingMachine"
          style={{display: 'flex', placeItems: 'center', justifyContent: 'center', height: '90vh'}}
        >
          Inside Vending Machine
        </div>
      </Border>
    )
  }
}
