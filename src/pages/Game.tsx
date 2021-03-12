import { CurrentWord } from '../components/CurrentWord'
import { ExperienceBar } from '../components/ExperienceBar'

import { WordsGrid } from '../components/WordsGrid'

import styles from '../styles/pages/Game.module.scss'

export function Game() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
          <ExperienceBar />

          <section>
            <CurrentWord />
            <WordsGrid />
          </section>
        </div>
    </div>
  )
}