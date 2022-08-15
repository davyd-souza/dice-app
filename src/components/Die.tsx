// STYLE
import './Die.css'

// UTIL
type DieProps = {
  side: string
}

export function Die({ side }: DieProps) {
  return(
    <i className={`Die fa-solid fa-dice-${side}`}></i>
  )
}