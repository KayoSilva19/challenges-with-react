export function TimerDisplay({ time }) {
  return (
    <div className="border-2 border-emerald-800 rounded px-4 bg-zinc-950">
      <span className="text-zinc-200 text-[56px] font-bold">{time}</span>
    </div>
  )
}
