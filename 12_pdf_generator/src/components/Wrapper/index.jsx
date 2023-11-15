export function Wrapper({ children }) {
  return (
    <div className="flex flex-col items-center w-[100%] h-screen">
      {children}
    </div>
  )
}
