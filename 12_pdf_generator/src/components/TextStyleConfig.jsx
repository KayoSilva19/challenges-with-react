export function TextStyleConfig({
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  isBold,
  setIsbold,
}) {
  const labelStyle = 'text-zinc-900 font-semibold text-[18px]'
  const inputStyle =
    'w-full border border-blue-200 rounded mt-2 h-[2.5rem] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-4 font-normal'
  return (
    <>
      <label className={labelStyle}>
        Font Size:
        <input
          type="text"
          className={inputStyle}
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </label>
      <label className="text-zinc-900 font-semibold text-[18px] flex items-center gap-4">
        Font Color:
        <input
          type="color"
          className="h-8 w-8"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
        />
      </label>
      <label className="text-zinc-900 font-semibold text-[18px] flex items-center ">
        Bold:
        <input
          type="checkbox"
          className="ml-2 h-4 w-8 cursor-pointer"
          value={isBold}
          onChange={(e) => setIsbold(e.target.value)}
        />
      </label>
    </>
  )
}
