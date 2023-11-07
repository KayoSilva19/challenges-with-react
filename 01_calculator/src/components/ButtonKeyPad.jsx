export function ButtonKeyPad({ children }) {
  const ButtonKeyPadStlye =
    'rounded-md w-12 h-16 sm:w-16 sm:h-16 text-center md:w-24 md:h-16 font-bold text-[24px] text-cyan-500 drop-shadow-md bg-gray-50 cursor hover:scale-110 hover:bg-cyan-500 hover:text-gray-50 translate transition-all'
  return <button className={ButtonKeyPadStlye}>{children}</button>
}
