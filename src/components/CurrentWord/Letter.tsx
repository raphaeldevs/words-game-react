import { useState } from 'react'

interface LetterProps {
  letter: string
  selectedClassName: string
  animationDelay: string
}

export function Letter({
  letter,
  selectedClassName,
  animationDelay
}: LetterProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <span
      style={{ animationDelay }}
      className={isSelected ? selectedClassName : ''}
    >
      {letter}
    </span>
  )
}