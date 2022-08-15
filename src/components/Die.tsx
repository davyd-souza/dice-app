// STYLE
import './Die.css'

// UTIL
type DieProps = {
  side: string
  rolling: boolean
}

export function Die({ side, rolling }: DieProps) {
  return(
    <i className={`Die fa-solid fa-dice-${side} ${rolling && 'shaking'}`}></i>
  )
}