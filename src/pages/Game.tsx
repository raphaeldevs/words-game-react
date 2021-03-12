import { ExperienceBar } from '../components/ExperienceBar'

import { WordsGrid } from '../components/WordsGrid'

import styles from '../styles/pages/Game.module.scss'

export function Game() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
          <ExperienceBar />

          <section>
            <WordsGrid />
          </section>
        </div>
    </div>
  )
}