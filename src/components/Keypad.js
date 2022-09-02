import React from 'react'
import  { useContext } from "react";
import { Context } from "../context/Context";

export default function Keypad({ usedKeys  }) {

  const { letters } = useContext(Context);


  return (
    <div className="keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={ color}>{l.key}</div>
        )
      })}
    </div>
  )
}
