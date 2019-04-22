class SlotMachine extends React.Component {
  constructor(props) {
    super(props)

    this.isSameValue = this.isSameValue.bind(this)
  }

  isSameValue (arr) {
    if (arr.length > 0) {
      for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[0])
        return false
      }
    }
    return true
  }

  render () {
    const { slots } = this.props
    const { isSameValue } = this

    return (
      <div style={{fontFamily: 'sans-serif'}}>
        <p style={{fontSize: '100px'}}>
          {slots.map((slot, i) => {
            return (` ${slot}`)
            })
          }
        </p>
        {isSameValue(slots) ? <p style={{color: 'green'}}>You win!</p> : <p style={{color: 'red'}}>You lose!</p>}
      </div>
    )
  }
}
