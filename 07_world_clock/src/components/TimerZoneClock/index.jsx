import { Button, Flex, Select } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Header } from '../Header'
import { DisplayTimeZoneCard } from './DisplayTimeZoneCard'

export const TimerZoneClock = () => {
  const fusosHorarios = [
    'UTC',
    'GMT',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Berlin',
    'Asia/Tokyo',
  ]

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [timeZoneSelected, setTimeZoneSelected] = useState([localTimeZone])

  const addTimeZone = (timeZone) => {
    const newTimeZone = timeZone.target.value

    if (!timeZoneSelected.includes(newTimeZone)) {
      setTimeZoneSelected([...timeZoneSelected, newTimeZone])
    }
  }

  const removeTimeZoneSelected = () => {
    setTimeZoneSelected([localTimeZone])
  }

  return (
    <>
      <Header />
      <Flex justify="center" w="100%" mt={10} p={10} mb={10}>
        <Flex
          flexDirection="column"
          grow
          flex="1"
          W={680}
          maxW={680}
          pos="relative"
        >
          <Select
            bg="blue.400"
            borderColor="blue.400"
            color="blackAlpha.800"
            fontWeight="medium"
            placeholder="Selecione um fuso horário"
            rounded={2}
            onChange={addTimeZone}
          >
            {fusosHorarios.map((timeZoneSelected) => {
              return (
                <option
                  color="blackAlpha.800"
                  key={timeZoneSelected}
                  value={timeZoneSelected}
                >
                  {timeZoneSelected}
                </option>
              )
            })}
          </Select>

          {timeZoneSelected.map((fuso) => {
            return (
              <DisplayTimeZoneCard
                key={fuso}
                timeZone={fuso}
                localTime={localTimeZone}
              />
            )
          })}

          {timeZoneSelected.length > 1 ? (
            <Button
              maxWidth={40}
              bg="red.500"
              fontSize={18}
              colorScheme="red"
              color="gray.50"
              fontWeight="semibold"
              pos="absolute"
              bottom={-14}
              right={0}
              onClick={removeTimeZoneSelected}
            >
              Clear
            </Button>
          ) : (
            ''
          )}
        </Flex>
      </Flex>
    </>
  )
}
