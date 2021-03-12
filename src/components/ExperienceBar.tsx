import { useContext } from 'react'
import { WordsContext } from '../contexts/WordsContext'
import styles from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(WordsContext)

  const currentExperiencePercent = (currentExperience / experienceToNextLevel) * 100

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${currentExperiencePercent}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${currentExperiencePercent}%` }}
        >
          { currentExperience } xp
        </span>
      </div>
      <span>{ experienceToNextLevel } xp</span>
    </header>
  )
}
