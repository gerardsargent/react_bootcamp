import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngry,
  faAnchor,
  faArchive,
  faAt,
  faArchway,
  faBaby,
  faBell,
  faBolt,
  faBone,
  faCar,
  faCity,
  faCloud,
  faCouch
} from '@fortawesome/free-solid-svg-icons'
import './AddIcon.css'

export default class AddIcon extends Component {
  static defaultProps = {
    options: [
      faAngry,
      faAnchor,
      faArchive,
      faAt,
      faArchway,
      faBaby,
      faBell,
      faBolt,
      faBone,
      faCar,
      faCity,
      faCloud,
      faCouch
    ]
  }
  constructor(props) {
    super(props)

    this.state = {
      icons: []
    }

    this.addIcon = this.addIcon.bind(this)
  }

  addIcon () {
    const { icons } = this.state
    const { options } = this.props
    const randomIcon = options[Math.floor(Math.random() * options.length)]
    const newIcons = [...icons, randomIcon]

    this.setState({
      icons: newIcons
    })
  }

  render() {
    const { icons } = this.state
    const { addIcon } = this
    const displayIcons = icons.map((icon, index) => (
      <FontAwesomeIcon
        key={index}
        icon={icon}
        className="AddIcon__icon"
      />
    ))

    return (
      <div className="AddIcon">
        <h1>Icon List: </h1>
        {displayIcons}
        <br />
        <button onClick={addIcon}>Add an icon</button>
      </div>
    )
  }
}

