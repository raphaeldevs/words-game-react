import { createContext, ReactNode, useState } from 'react'

import { getRandomWord } from '../utils/words'

interface WordsProviderProps {
  children: ReactNode
}

interface WordsContextData {
  currentWord: string
  selectedWordLetters: string
  currentExperience: number
  level: number
  levelUp: () => void
  setNewWord: () => void
}

export const WordsContext = createContext({} as WordsContextData)

export function WordsProvider({ children }: WordsProviderProps) {
  const [currentWord, setCurrentWord] = useState('')
  
  const [selectedWordLetters, setSelectedWordLetters] = useState('')
  
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function setNewWord() {
    setCurrentWord(getRandomWord())
  }

  function levelUp() {
    setLevel(level + 1)
  }

  const contextValue = {
    currentWord,
    selectedWordLetters,
    level, 
    levelUp,
    currentExperience,
    setNewWord
  }

  return (
    <WordsContext.Provider value={contextValue}>
      {children}
    </WordsContext.Provider>
  )
}
