import { WordsProvider } from './contexts/WordsContext'
import { Game } from './pages/Game'

import './styles/global.scss'

export function App() {
  return (
    <WordsProvider>
      <Game />
    </WordsProvider>
  )
}