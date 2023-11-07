export function LapList({ laps }) {
  const liStyled = 'bg-zinc-900 odd:bg-emerald-700  p-2 rounded'

  return (
    <>
      {laps.length !== 0 && (
        <div className="mt-6 bg-zinc-800 rounded text-zinc-50 drop-shadow-lg p-4 font-medium overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[24px] text-zinc-200">Voltas:</h3>
            <span className="text-[14px] bg-zinc-900 rounded-[100%] px-2 py-1">
              {laps.length}
            </span>
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            {laps.map((lap, index) => (
              <li key={index} className={liStyled}>
                Volta {index + 1}: {lap}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
