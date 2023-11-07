export function TimerControls({ timerOn, onLap, onStart, onStop, onReset }) {
  const stylesDefault =
    'w-[100%] font-bold text-[18px]  rounded h-10 drop-shadow transition-all'

  const styledButton = ` ${stylesDefault} bg-emerald-700 hover:text-emerald-700 hover:bg-zinc-200 hover:-translate-y-1 duration-300`
  const styledButtonMarkLap = ` ${stylesDefault} bg-zinc-200 text-emerald-700 rounded hover:scale-110  hover: hover:bg-emerald-700 hover:text-zinc-200 duration-200`

  const styledButtonStop = `${stylesDefault} bg-red-500 text-zinc-50 rounded  hover:scale-110 drop-shadow hover: hover:bg-red-700 duration-200`
  return (
    <div className="flex flex-col flex-wrap place-content-center gap-3 mt-4 text-zinc-50 ">
      <div className="flex w-[100%]  gap-4">
        {!timerOn && (
          <button onClick={onStart} className={styledButton}>
            Iniciar
          </button>
        )}

        {timerOn && (
          <button onClick={onStop} className={styledButtonStop}>
            Parar
          </button>
        )}
        <button onClick={onReset} className={styledButton}>
          Zerar
        </button>
      </div>

      {timerOn && (
        <button onClick={onLap} className={styledButtonMarkLap}>
          Marcar volta
        </button>
      )}
    </div>
  )
}
