import { CurrentWord } from '../components/CurrentWord'
import { ExperienceBar } from '../components/ExperienceBar'

import { LettersGrid } from '../components/LettersGrid'
import { LetterProvider } from '../contexts/LetterContext'

import styles from '../styles/pages/Game.module.scss'

export function Game() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ExperienceBar />

        <LetterProvider>
          <section>
            <CurrentWord />
            <LettersGrid />
          </section>
        </LetterProvider>
      </div>
    </div>
  )
}
