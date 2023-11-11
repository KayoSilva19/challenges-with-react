import { Center, Flex } from '@chakra-ui/react'
import { TimerZoneClock } from './components/TimerZoneClock'

function App() {
  return (
    <Flex flexDirection="column">
      <TimerZoneClock />
    </Flex>
  )
}

export default App
