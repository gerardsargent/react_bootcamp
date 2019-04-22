class App extends React.Component {
  render () {
    return (
      <div>
        <GetNum />
        <GetNum />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
