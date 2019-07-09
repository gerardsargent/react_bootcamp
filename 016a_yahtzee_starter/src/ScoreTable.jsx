import React, { Component } from 'react'
import RuleRow from './RuleRow'
import './ScoreTable.css'
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from './Rules'


class ScoreTable extends Component {

  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones} description="Sum all 1s" doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow name="Twos" score={scores.twos} description="Sum all the 2s" doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Threes" score={scores.threes} description="Sum all the 3s" doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Fours" score={scores.fours} description="Sum all the 4s" doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="Fives" score={scores.fives} description="Sum all the 5s" doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sixes" score={scores.sixes} description="Sum all the 6s" doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind} description="Total all the die faces if 3 are same" doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow name="Four of Kind" score={scores.fourOfKind} description="Total all the die faces if 4 are same" doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow name="Full House" score={scores.fullHouse} description="3 of a kind, and a pair - 25pt" doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow name="Small Straight" score={scores.smallStraight} description="4 consecutive faces - 30pt" doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow name="Large Straight" score={scores.largeStraight} description="5 consecutive faces - 50pt" doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow name="Yahtzee" score={scores.yahtzee} description="5 of a kind - 50pt" doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow name="Chance" score={scores.chance} description="Total all the die faces regardless" doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ScoreTable;
