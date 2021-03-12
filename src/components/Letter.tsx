import { useState } from 'react'

interface LetterProps {
  letter: string
  selectedClassName: string
  onClickEvent?: boolean
  animationDelay?: string
}

export function Letter({
  letter,
  selectedClassName,
  onClickEvent,
  animationDelay
}: LetterProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <span
      style={{ animationDelay }}
      className={isSelected ? selectedClassName : ''}
      onClick={() => onClickEvent && setIsSelected(!isSelected)}
    >
      {letter}
    </span>
  )
}
