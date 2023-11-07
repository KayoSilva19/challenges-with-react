import { ButtonKeyPad } from './ButtonKeyPad'
import { ButtonOperation } from './ButtonOperation'

export function Calculator() {
  const keyPadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const operations = ['+', '-', '*', '/']

  const displayCalculator =
    'border border-zinc-300 rounded-lg text-right py-6 px-4 text-lg font-bold text-zinc-800'

  const displayFlexCol = 'flex flex-col gap-4'
  const buttonAcStyle =
    'rounded-md w-12 h-14 sm:w-16 sm:h-16 text-center md:w-24 md:h-16 font-bold text-[24px] drop-shadow-md cursor hover:scale-110 bg-cyan-500 text-gray-50 translate transition-all text-center'

  return (
    <main className="max-w-[460px] flex flex-col gap-4">
      <div className={displayCalculator}> 3 + 3 = 6</div>
      <div className={displayCalculator}>6</div>
      <div className="flex justify-between gap-1 mt-4">
        <div className="flex gap-4 flex-wrap">
          <button className={buttonAcStyle}>AC</button>
          {keyPadNumbers.map((keypad) => (
            <ButtonKeyPad key={keypad}>{keypad}</ButtonKeyPad>
          ))}
        </div>

        <div className={displayFlexCol}>
          {operations.map((keypad) => (
            <ButtonOperation key={keypad}>{keypad}</ButtonOperation>
          ))}
        </div>
      </div>
    </main>
  )
}
