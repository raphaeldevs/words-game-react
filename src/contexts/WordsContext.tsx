import { createContext, ReactNode, useState } from 'react'

import { getRandomWord } from '../utils/words'

interface WordsProviderProps {
  children: ReactNode
}

interface WordsContextData {
  currentWord: string
  selectedWordLetters: string
  currentExperience: number
  experienceToNextLevel: number
  currentLetterIndex: number
  level: number
  levelUp: () => void
  incrementCurrentLetterIndex: () => void
  newState: () => void
}

export const WordsContext = createContext({} as WordsContextData)

export function WordsProvider({ children }: WordsProviderProps) {
  const [currentWord, setCurrentWord] = useState(getRandomWord())

  const [selectedWordLetters, setSelectedWordLetters] = useState('')

  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function incrementCurrentLetterIndex() {
    if (currentLetterIndex === currentWord.length - 1) return newState()

    setCurrentLetterIndex(currentLetterIndex + 1)
  }

  function newState() {
    setCurrentLetterIndex(0)
    setCurrentWord(getRandomWord())
  }

  const contextValue = {
    currentWord: currentWord.toUpperCase(),
    selectedWordLetters,
    level,
    levelUp,
    currentLetterIndex,
    currentExperience,
    experienceToNextLevel,
    incrementCurrentLetterIndex,
    newState
  }

  return (
    <WordsContext.Provider value={contextValue}>
      {children}
    </WordsContext.Provider>
  )
}
