class App extends React.Component {
  render () {
    return (
      <div>
        <Hello
          to="John"
          from="Ringo"
          bangs={4}
          img="img/hello-i-m-nik-1193389-unsplash.jpg"
        />
        <Hello
          to="Paul"
          img="img/hello-i-m-nik-1193389-unsplash.jpg"
        />
        <GetNum />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
