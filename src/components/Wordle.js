import React, { useEffect, useState ,useContext } from 'react'
import { Context } from "../context/Context";
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import End from './End'

export default function Wordle({solution}) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, } = useWordle(solution);
  const {     themeInv } = useContext(Context);
  const [showEnd, setShowEnd] = useState(false);
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowEnd(true), 1000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn > 5) {
      setTimeout(() => setShowEnd(true), 1000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} themeInv={themeInv} />
      {showEnd && <End isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  )
}
