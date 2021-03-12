import { CurrentWord } from '../components/CurrentWord'
import { ExperienceBar } from '../components/ExperienceBar'

import { LettersGrid } from '../components/LettersGrid'

import styles from '../styles/pages/Game.module.scss'

export function Game() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
          <ExperienceBar />

          <section>
            <CurrentWord />
            <LettersGrid />
          </section>
        </div>
    </div>
  )
}