import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    images: [img0, img1, img2, img3, img4, img5, img6],
    words: ['Chewbacca', 'Skywalker', 'Palpatine', 'Lightsabre']
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      wrongGuesses: new Set(),
      guessed: new Set(),
      // answer: this.props.words[Math.floor(Math.random * this.props.words.length)],
      answer: 'Chewbacca',
      win: false,
      lose: false
    };
    this.handleGuess = this.handleGuess.bind(this);
  }

  checkGuessesAgainstAnswer (guessedLetters, answer) {
    return [...answer].every(l => [...guessedLetters].includes(l))
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    const { gameOver, answer, guessed } = this.state

    if (gameOver) {
      return `The word was: ${answer}`
    } else {
      return answer
        .split("")
        .map(ltr => (guessed.has(ltr) ? ltr : "_"));
    }
  }

  /** handleGuess: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    const { guessed, answer, nWrong } = this.state
console.log('guessed = ', guessed)
    const ltr = evt.target.value;

    this.setState(prevState => ({
      guessed: prevState.guessed.add(ltr),
      nWrong: prevState.nWrong + (prevState.answer.includes(ltr) ? 0 : 1),
      wrongGuesses: prevState.answer.includes(ltr) ? [...prevState.wrongGuesses] : [...prevState.wrongGuesses, ltr],
      gameOver: nWrong === answer.length ? true : false
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    const { gameOver, guessed, answer } = this.state
    const { checkGuessesAgainstAnswer } = this

    if (gameOver) {
      return ''
    } else {
      return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
        <button
          key={ltr}
          value={ltr}
          onClick={this.handleGuess}
          disabled={guessed.has(ltr) || checkGuessesAgainstAnswer(guessed, answer)}
        >
          {ltr}
        </button>
      ));
    }
  }

  /** render: render game */
  render() {
    const { wrongGuesses, gameOver, guessed, answer, nWrong } = this.state
    const { images } = this.props
    const { checkGuessesAgainstAnswer, guessedWord, generateButtons } = this

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        {/* {checkGuessesAgainstAnswer(guessed, answer) && <p>Congratulations - you win!</p>} */}
        {gameOver ? 'Game Over!' : <img
          src={ images[nWrong] }
          alt={ `${wrongGuesses.length || 'No' } wrong ${ wrongGuesses.length === 1 ? 'guess' : 'guesses' } so far` }
        />}
        {wrongGuesses.length >= 1 && <p className="Hangman-wrong_guesses">Wrong guesses: { wrongGuesses.length }</p>}
        <p className='Hangman-word'>{ guessedWord() }</p>
        <p className='Hangman-btns'>{ generateButtons() }</p>
      </div>
    );
  }
}

export default Hangman;
