import { Center } from '@chakra-ui/react'
import { CardQuotes } from './components/CardQuotes'
import { useState } from 'react'
import citacoes from './data/dataQuotes'

function App() {
  const [index, setIndex] = useState(0)

  function handleNextQuote() {
    if (index === 11) {
      return setIndex(0)
    }
    setIndex(index + 1)
  }
  return (
    <>
      <Center>
        <CardQuotes
          text={citacoes[index].texto}
          author={citacoes[index].autor}
          handleNextQuote={handleNextQuote}
        />
      </Center>
    </>
  )
}

export default App
