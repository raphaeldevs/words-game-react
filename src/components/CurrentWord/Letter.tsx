interface LetterProps {
  letter: string
  selectedClassName: string
  animationDelay: string
  selectedState: boolean
}

export function Letter({
  letter,
  selectedState,
  selectedClassName,
  animationDelay
}: LetterProps) {
  return (
    <span
      style={{ animationDelay }}
      className={selectedState ? selectedClassName : ''}
    >
      {letter}
    </span>
  )
}