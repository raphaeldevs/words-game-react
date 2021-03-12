import { useEffect, useState } from 'react'
import styles from '../styles/components/WordsGrid.module.scss'
import { getLettersSequence } from '../utils/words'

import { Letter } from './Letter'

export function WordsGrid() {
  const [lettersSequence, setLettersSequence] = useState<string[]>([])

  useEffect(() => {
    setLettersSequence(getLettersSequence('DAVID'))
  }, [])

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
