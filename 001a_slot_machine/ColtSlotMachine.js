class ColtSlotMachine extends React.Component {
  constructor(props) {
    super(props)

    this.isSameValue = this.isSameValue.bind(this)
  }

  isSameValue (s1, s2, s3) {
    if ((s1 === s2) && (s2 === s3)) {
        return 'You win!'
      }
    else {
      return 'You lose!'
    }
  }

  render () {
    const { s1, s2, s3 } = this.props
    const { isSameValue } = this

    return (
      <div>
        <p>{s1} {s2} {s3}</p>
        <p>{isSameValue(s1, s2, s3)}</p>
      </div>
    )
  }
}
