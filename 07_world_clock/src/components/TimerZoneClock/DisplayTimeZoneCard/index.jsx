import { useState, useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'

export const DisplayTimeZoneCard = ({
  timeZone,
  localTime,
  lastTime = false,
}) => {
  const [time, setTime] = useState('')
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date()
      const options = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }
      const timeString = date.toLocaleTimeString('en-US', options)
      setTime(timeString)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeZone])
  return (
    <Flex
      bg="blackAlpha.700"
      flex="flex"
      justifyContent="center"
      flexDirection="column"
      boxShadow="xs"
      p={4}
      rounded={4}
      mt={10}
    >
      {timeZone === localTime ? (
        <Text color="red.500">Fuso horário local </Text>
      ) : (
        ''
      )}
      {/* {lastTime ? <Text color="red.500">Última consulta realizada </Text> : ''} */}
      <Text fontSize="3xl" as="b" color="gray.50">
        {timeZone}
      </Text>
      <Text fontSize="3xl" as="b" color="gray.50">
        {time}
      </Text>
    </Flex>
  )
}
