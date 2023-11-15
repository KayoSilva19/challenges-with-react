import { GeneratePDF } from './components/GeneratePdf'
import { Wrapper } from './components/Wrapper'

function App() {
  return (
    <Wrapper>
      <h1 className="mt-8 font-semibold text-[32px] text-zinc-900">
        Gerador de PDF
      </h1>
      <GeneratePDF />
    </Wrapper>
  )
}

export default App
