class App extends React.Component {
  render () {
    return (
      <div>
        <Hello />
        <GetNum />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
