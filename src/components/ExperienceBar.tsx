import styles from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `50%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `50%` }}
        >
          150 xp
        </span>
      </div>
      <span>300 xp</span>
    </header>
  )
}
