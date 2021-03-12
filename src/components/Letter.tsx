import { useState } from 'react'

interface LetterProps {
  letter: string
  selectedClassName: string
  onClickEvent?: boolean
}

export function Letter({ letter, selectedClassName, onClickEvent }: LetterProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <span
      className={isSelected ? selectedClassName : ''}
      onClick={() => onClickEvent && setIsSelected(!isSelected)}
    >
      { letter }
    </span>
  )
}