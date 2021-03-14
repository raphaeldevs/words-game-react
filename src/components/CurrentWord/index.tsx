import { useContext } from 'react'

import { LetterContext } from '../../contexts/LetterContext'

import styles from '../../styles/components/CurrentWord.module.scss'

import { Letter } from './Letter'

export function CurrentWord() {
  const { letters } = useContext(LetterContext)

  return (
    <h1 className={styles.currentWord} data-word-lenght={4}>
      {letters.map(({ text, selectedState, id }, index) => (
        <Letter
          key={id}
          animationDelay={`${index * 0.1}s`}
          letter={text.toUpperCase()}
          selectedState={selectedState}
          selectedClassName={styles.selected}
        />
      ))}
    </h1>
  )
}
