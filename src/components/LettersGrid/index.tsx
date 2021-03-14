import { useContext, useEffect, useState } from 'react'

import { WordsContext } from '../../contexts/WordsContext'

import { getLettersSequence } from '../../utils/words'

import { Letter } from './Letter'

import styles from '../../styles/components/WordsGrid.module.scss'

export function LettersGrid() {
  const { currentWord } = useContext(WordsContext)

  const [lettersSequence, setLettersSequence] = useState<string[]>(
    getLettersSequence(currentWord)
  )

  useEffect(() => {
    const lettersSequence = getLettersSequence(currentWord)

    setLettersSequence(lettersSequence)
  }, [currentWord])

  return (
    <main className={styles.wordsGrid}>
      {lettersSequence.map((letter, index) => {
        return (
          <Letter
            key={index}
            letter={letter}
            selectedClassName={styles.selected}
          />
        )
      })}
    </main>
  )
}
