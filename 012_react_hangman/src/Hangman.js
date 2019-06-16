import React, { Component } from "react";
import "./Hangman.css";
import { ENGLISH_WORDS } from './words';
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
    words: ['lennon', 'mccartney', 'ringo', 'harrison']
  };

  constructor(props) {
    super(props);

    this.state = {
      nWrong: 0,
      maxWrong: 0,
      wrongGuesses: new Set(),
      guessed: new Set(),
      answer: this.getRandomWord(),
      gameOver: false
    }

    this.checkGuessesAgainstAnswer = this.checkGuessesAgainstAnswer.bind(this)
    this.guessedWord = this.guessedWord.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
    this.generateButtons = this.generateButtons.bind(this)
    this.getRandomWord = this.getRandomWord.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  getRandomWord () {
    // randomWord
    const numberOfWords = ENGLISH_WORDS.length
    const randomIndexOfWords = Math.floor(Math.random() * numberOfWords)
    return ENGLISH_WORDS[randomIndexOfWords]
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
      return (
        <div>
          <p>The word was: {answer}</p>
        </div>
      )
    } else {
      return answer
        .split("")
        .map(ltr => (guessed.has(ltr) ? ltr : "_"));
    }
  }

  resetGame () {
    this.setState({
      nWrong: 0,
      maxWrong: 0,
      wrongGuesses: new Set(),
      guessed: new Set(),
      answer: this.getRandomWord(),
      gameOver: false
    })
  }

  /** handleGuess: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    const ltr = evt.target.value;

    this.setState(prevState => ({
      guessed: prevState.guessed.add(ltr),
      nWrong: prevState.nWrong + (prevState.answer.includes(ltr) ? 0 : 1),
      wrongGuesses: prevState.answer.includes(ltr) ? [...prevState.wrongGuesses] : [...prevState.wrongGuesses, ltr],
      gameOver: prevState.nWrong === prevState.answer.length ? true : false
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
          className="Hangman__button"
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
    const { checkGuessesAgainstAnswer, guessedWord, generateButtons, resetGame } = this

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        { checkGuessesAgainstAnswer(guessed, answer) && <p>Congratulations - you win!</p> }
        { gameOver ? 'Game Over!' : <img
          src={ images[nWrong] }
          alt={ `${nWrong || 'No' } wrong ${ wrongGuesses.length === 1 ? 'guess' : 'guesses' } so far` }
        /> }
        { wrongGuesses.length >= 1 && <p className="Hangman-wrong_guesses">Wrong guesses: { wrongGuesses.length }</p> }
        <p className='Hangman-word'>{ guessedWord() }</p>
        <p className='Hangman-btns'>{ generateButtons() }</p>
        <button
          className="Hangman__button Hangman__button--reset"
          onClick={() => resetGame()}>
            Restart?
        </button>
      </div>
    );
  }
}

export default Hangman;
