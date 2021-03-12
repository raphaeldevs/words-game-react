import { useContext, useState } from 'react'

import { WordsContext } from '../contexts/WordsContext'

import { getLettersSequence } from '../utils/words'

import { Letter } from './Letter'

import styles from '../styles/components/WordsGrid.module.scss'

export function WordsGrid() {
  const { currentWord } = useContext(WordsContext)
  
  const [lettersSequence, setLettersSequence] = useState<string[]>(
    getLettersSequence(currentWord)
  )

  return (
    <main className={styles.wordsGrid}>
      {lettersSequence.map(letter => (
        <Letter
          key={Math.random()}
          letter={letter}
          selectedClassName={styles.selected}
          onClickEvent
        />
      ))}
    </main>
  )
}
