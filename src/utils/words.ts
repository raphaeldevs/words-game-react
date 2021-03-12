import words from '../../words.json'

const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

export function getIncludedLetters(word: string) {
  const indexes = [...word].map(wordLetter =>
    letters.findIndex(letter => letter === wordLetter.toUpperCase())
  )

  return indexes
}

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * (words.length + 1))

  return words[randomIndex]
}

export function getLettersSequence(needToInclude: string) {
  const indexes = getIncludedLetters(needToInclude)

  const sequenceLength = 16 - needToInclude.length

  const sequenceLetters = letters.filter((letter, index) => {
    if (!indexes.includes(index)) return letter
  })

  sequenceLetters.length = sequenceLength

  return [...sequenceLetters, ...needToInclude].sort(
    (foo, bar) => 0 - Math.random()
  )
}
