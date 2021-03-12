import { useContext } from 'react'
import { WordsContext } from '../../contexts/WordsContext'
import styles from '../../styles/components/CurrentWord.module.scss'

import { Letter } from './Letter'

export function CurrentWord() {
  const { currentWord } = useContext(WordsContext)

  return (
    <h1 className={styles.currentWord} data-word-lenght={4}>
      {[...currentWord].map((letter, index) => (
        <Letter
          animationDelay={`${index * 0.1}s`}
          letter={letter}
          selectedClassName={styles.selected}
        />
      ))}
    </h1>
  )
}