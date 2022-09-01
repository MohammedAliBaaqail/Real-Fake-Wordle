import React from 'react'

export default function End({ isCorrect, solution, turn }) {



  return (
    <div className="End">
      {isCorrect && (
        <div>
          <h1>You Won!</h1>
          <p className="solution">{solution} Is correct!</p>
          <p>You found the solution in {turn} guesses :)</p>
          <button onClick={() => window.location.reload(false)}>Click to reload!</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You Lost!</h1>
          <h3>The correct answer is:</h3>
          <p className="solution"> {solution}</p>
          <p>Try again :) </p>
          <button className='button' onClick={() => window.location.reload(false)}>Click to reload!</button>
        </div>
      )}
    </div>
  )
}
