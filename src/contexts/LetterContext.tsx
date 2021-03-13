import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { WordsContext } from './WordsContext'

interface LetterContextData {
  handleSelectLetter: () => void
  checkIsCorrectCurrentLetter: (text: string) => boolean
  letters: Letter[]
}

interface LetterProviderProps {
  children: ReactNode
}

interface Letter {
  id: number
  selectedState: boolean
  text: string
}

export const LetterContext = createContext({} as LetterContextData)

export function LetterProvider({ children }: LetterProviderProps) {
  const {
    currentLetterIndex,
    currentWord,
    incrementCurrentLetterIndex
  } = useContext(WordsContext)

  const [letters, setLetters] = useState<Letter[]>([])

  function checkIsCorrectCurrentLetter(text: string) {
    return currentWord[currentLetterIndex] === text
  }

  function handleSelectLetter() {
    const currentLetterId = letters[currentLetterIndex].id

    const newLettersState = letters.map(letter =>
      letter.id === currentLetterId
        ? { ...letter, selectedState: true }
        : letter
    )

    setLetters(newLettersState)
    incrementCurrentLetterIndex()
  }

  useEffect(() => {
    const newState = [...currentWord].map(letter => ({
      id: Math.random(),
      selectedState: false,
      text: letter
    }))

    setLetters(newState)
  }, [currentWord])

  const contextValue = {
    letters,
    checkIsCorrectCurrentLetter,
    handleSelectLetter
  }

  return (
    <LetterContext.Provider value={contextValue}>
      {children}
    </LetterContext.Provider>
  )
}
