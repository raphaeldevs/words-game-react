import { useContext, useEffect, useRef, useState } from 'react'
import { LetterContext } from '../../contexts/LetterContext'
import { WordsContext } from '../../contexts/WordsContext'

interface LetterProps {
  letter: string
  selectedClassName: string
}

export function Letter({
  letter,
  selectedClassName
}: LetterProps) {
  const { checkIsCorrectCurrentLetter, handleSelectLetter } = useContext(LetterContext)
  const { currentWord, startNewState } = useContext(WordsContext)

  const [isSelected, setIsSelected] = useState(false)

  const spanRef = useRef<HTMLSpanElement>(null)

  function handleError() {
    const keyframes = [
      { background: 'var(--red)', color: 'white' }
    ]

    const config: KeyframeAnimationOptions = {
      duration: 100,
      iterations: 2
    }

    spanRef.current?.animate(keyframes, config)

    startNewState()
  }

  function handleClick() {
    if (isSelected) return

    const isCorrectCurrentLetter = checkIsCorrectCurrentLetter(letter)

    setIsSelected(isCorrectCurrentLetter)

    if (isCorrectCurrentLetter) return handleSelectLetter()
    
    handleError()
  }

  useEffect(() => setIsSelected(false), [currentWord])

  return (
    <span
      ref={spanRef}
      className={isSelected ? selectedClassName : ''}
      onClick={handleClick}
    >
      {letter}
    </span>
  )
}
