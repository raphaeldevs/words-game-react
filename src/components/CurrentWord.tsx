import { useEffect, useState } from 'react'
import styles from '../styles/components/CurrentWord.module.scss'
import { getRandomWord } from '../utils/words'

import { Letter } from './Letter'

const letters = [
  'A', 'B', 'C',
  'D', 'E', 'F',
  'G', 'H', 'I',
  'J', 'K', 'L',
  'M', 'N', 'O',
  'P', 'Q', 'R',
  'S', 'T', 'U',
  'V', 'W', 'X',
  'Y', 'Z'
]

export function CurrentWord() {
  const [word, setWord] = useState('david')
  
  return (
    <h1 className={styles.currentWord} data-word-lenght={4}>
      { [...word].map(letter => (
        <Letter letter={letter} selectedClassName={styles.selected}/>
      )) }
    </h1>
  )
}