import { useContext } from 'react'

import { WordsContext } from '../contexts/WordsContext'

import styles from '../styles/components/LevelUpModal.module.scss'

import closeIcon from '../images/close.svg'
import levelUpCongratulationsImage from '../images/kids.svg'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(WordsContext)
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div>
          <header style={{ backgroundImage: `url(${levelUpCongratulationsImage})` }}>
            <span>{level}</span>
          </header>

          <strong>Parabéns!</strong>
          <p>Você alcançou um novo level.</p>

          <button
            title="Fechar"
            className={styles.close}
            type="button"
            onClick={closeLevelUpModal}
          >
            <img src={closeIcon} alt="Fechar modal" />
          </button>
        </div>
      </div>
    </div>
  )
}
