class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <SlotMachine
          slots={['🍒', '🍋', '🍇']}
        />
        <SlotMachine
          slots={['🍒', '🍒', '🍒']}
          />
        <SlotMachine
          slots={['🍋', '🍇', '🍋']}
        />
        <SlotMachine
          slots={['🍋', '🍋', '🍋']}
        />
        <ColtSlotMachine
          s1='🍋'
          s2='🍋'
          s3='🍋'
        />
        <ColtSlotMachine
          s1='🍋'
          s2='🍇'
          s3='🍒'
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
