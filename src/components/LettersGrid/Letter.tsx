import { useState } from 'react'

interface LetterProps {
  letter: string
  selectedClassName: string
}

export function Letter({
  letter,
  selectedClassName
}: LetterProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <span
      className={isSelected ? selectedClassName : ''}
      onClick={() => setIsSelected(!isSelected)}
    >
      {letter}
    </span>
  )
}
