
import React, { useContext } from "react";
import { Context } from "../context/Context";




export default function Row({ guess, currentGuess }) {
  
  const { themeInvText,themeInvBorder  } = useContext(Context);

  if (guess) {
    return (
      <div  className={`  ${themeInvBorder} row past`}>
        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    )
  }


  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">
    
        {letters.map((letter, i) => (
          <div key={i} className={`${themeInvText} ${themeInvBorder} filled`}>{letter}</div>
        ))}
        {[...Array(5 - letters.length)].map((_,i) => (
          <div className={themeInvText} key={i}></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
  
}
