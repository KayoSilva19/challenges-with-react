export function ButtonOperation({ children }) {
  const ButtonOperationStlye =
    'rounded-md w-12 h-14 sm:w-16 sm:h-16 text-center md:w-24 md:h-16  font-bold text-[24px] drop-shadow-md cursor hover:scale-110 bg-cyan-500 text-gray-50 translate transition-all '
  return <button className={ButtonOperationStlye}>{children}</button>
}
