export const Wrapper = ({ children }) => {
  return (
    <div
      className="h-[calc(100%-_4rem)]  bg-gray-100 dark:bg-zinc-950
    text-gray-900 dark:text-gray-50 flex flex-col items-center"
    >
      {children}
    </div>
  )
}
