import { useState, useEffect } from 'react'

import { LapList } from './LapList'
import { TimerControls } from './TimerControls'
import { TimerDisplay } from './TimerDisplay'

export function Timer() {
  const [milliseconds, setMilliseconds] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [laps, setLaps] = useState([])

  const formatTime = () => {
    const minutes = ('0' + Math.floor((milliseconds / 60000) % 60)).slice(-2)
    const seconds = ('0' + Math.floor((milliseconds / 1000) % 60)).slice(-2)
    const centiSeconds = ('0' + ((milliseconds / 10) % 100)).slice(-2)

    return `${minutes}:${seconds}:${centiSeconds}`
  }

  document.title = formatTime()

  const startTime = (interval) => {
    return setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 10)
    }, 10)
  }

  const stopTimer = (interval) => {
    clearInterval(interval)
    return interval
  }

  const resetTimer = () => {
    setMilliseconds(0)
    setTimerOn(false)
    setLaps([])
  }

  const addLap = () => {
    setLaps([...laps, formatTime()])
  }

  useEffect(() => {
    let interval = null

    if (timerOn) {
      interval = startTime(interval)
    } else if (!timerOn) {
      interval = stopTimer(interval)
    }

    return () => stopTimer(interval)
  }, [timerOn])

  const onStart = () => {
    setTimerOn(true)
  }
  const onStop = () => {
    setTimerOn(false)
  }

  return (
    <div className="text-center w-64 md:w-96">
      <TimerDisplay time={formatTime()} />
      <TimerControls
        timerOn={timerOn}
        onStart={onStart}
        onStop={onStop}
        onReset={resetTimer}
        onLap={addLap}
      />
      <LapList laps={laps} />
    </div>
  )
}
