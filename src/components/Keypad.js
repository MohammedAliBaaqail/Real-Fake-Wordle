import React ,{useState , useEffect} from 'react'
import letters from '../context/letters'

export default function Keypad({ usedKeys  }) {
  const [typedLetters, setTypedLetters] = useState(null)

  // fetch('https://json-server-real-fake-wordle.herokuapp.com/letters')
  // // fetch('https://plant-fluffy-basilisk.glitch.me/letters')
  // .then(res => res.json())
  // .then(json => {
  //   settypedLetters(json)
  // })


    useEffect(() => {
    setTypedLetters(letters)
     
         
     }, [])

  return (
    <div className="keypad">
      {typedLetters && typedLetters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={ color}>{l.key.toUpperCase()}</div>
        )
      })}
    </div>
  )
}
