// DEPENDENCY
import { useEffect, useState } from 'react'

// COMPONENT
import { Die } from './Die'

// STYLE
import './RollDice.css'

// UTIL
const sides = ['one', 'two', 'three', 'four', 'five', 'six']

export function RollDice() {
  const [ dieOne, setDieOne ] = useState<string>('one')
  const [ dieTwo, setDieTwo ] = useState<string>('one')
  const [ rolling, setRolling ] = useState<boolean>(false)

  const roll = () => {
    setRolling(true)
    setDieOne(sides[Math.floor(Math.random() * sides.length)])
    setDieTwo(sides[Math.floor(Math.random() * sides.length)])
    setTimeout(() => setRolling(false), 1000)
  }

  useEffect(() => {
    setDieOne(sides[Math.floor(Math.random() * sides.length)])
    setDieTwo(sides[Math.floor(Math.random() * sides.length)])
  }, [])

  return (
    <div className="RollDice">
      <div className="RollDice-items">
        <Die side={dieOne} />
        <Die side={dieTwo} />
      </div>
      <button onClick={roll} disabled={rolling}>
        { rolling ? 'Rolling...' : 'Roll!' }
      </button>
    </div>
  )
}