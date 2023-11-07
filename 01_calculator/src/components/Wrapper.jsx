export function Wrapper({ children }) {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center p-8">
        {children}
      </div>
    </>
  )
}
