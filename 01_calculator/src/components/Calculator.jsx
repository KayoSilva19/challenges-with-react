import { useState } from 'react'
import { ButtonKeyPad } from './ButtonKeyPad'
import { ButtonOperation } from './ButtonOperation'

export function Calculator() {
  const [currentValue, setCurrentValue] = useState('0')
  const [pendingOperation, setPendingOperation] = useState(null)
  const [pendingValue, setPendingValue] = useState(null)
  const [completeOperation, setCompleteOperation] = useState('')

  const keyPadNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const operations = ['+', '-', '*', '/']

  function handleClick(val) {
    setCurrentValue((prevState) => {
      if (prevState === '0') {
        return val
      } else {
        return prevState + val
      }
    })

    setCompleteOperation((prevOperation) => prevOperation + val)
  }

  function handleClear() {
    setCurrentValue('0')
    setPendingOperation(null)
    setPendingValue(null)
    setCompleteOperation('')
  }

  const displayCalculator =
    'border border-zinc-300 rounded-lg text-right py-6 px-4 text-lg font-bold overflow-x-auto text-zinc-800'

  const displayFlexCol = 'flex flex-col gap-4'
  const buttonAcStyle =
    'rounded-md w-12 h-14 sm:w-16 sm:h-16 text-center md:w-24 md:h-16 font-bold text-[24px] drop-shadow-md cursor hover:scale-110 bg-cyan-500 text-gray-50 translate transition-all text-center'

  return (
    <main className="max-w-[460px] flex flex-col gap-4">
      <div className={displayCalculator}>
        <span className="text-zinc-500">{completeOperation}</span>
      </div>
      <div className={displayCalculator}>{currentValue}</div>
      <div className="flex justify-between gap-1 mt-4">
        <div className="flex gap-4 flex-wrap">
          <button onClick={() => handleClear()} className={buttonAcStyle}>
            AC
          </button>
          {keyPadNumbers.map((keypad) => (
            <ButtonKeyPad handleClick={handleClick} key={keypad}>
              {keypad}
            </ButtonKeyPad>
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
