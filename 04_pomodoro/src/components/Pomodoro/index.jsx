import {
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Slide,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TimerFinishedAlert } from './TimerFinishedAlert'
import { HistoryTask } from './HistoryTask'

export function Pomodoro() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setseconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [alertIsActive, setAlertIsActive] = useState(false)
  const [task, setTask] = useState('')
  const [userTime, setUserTime] = useState('')
  const [validation, setValidation] = useState(true)
  const [historyTask, setHistoryTask] = useState([])

  useEffect(() => {
    let interval

    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes(minutes - 1)
          setseconds(59)
        } else {
          setseconds(seconds - 1)
        }
      }, 10)
    } else if (minutes === 0 && seconds === 0 && isActive) {
      setAlertIsActive(true)

      setTimeout(() => {
        setAlertIsActive(false)
      }, 3000)
      setIsActive(false)
      setHistoryTask((prev) => [...prev, { task, userTime }])
      setTask('')
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, minutes, seconds, alertIsActive, historyTask, task, userTime])

  function toggleTime() {
    if (task === '' || userTime === '') {
      return setValidation(false)
    }

    setValidation(true)
    setIsActive(!isActive)
  }

  function resetTimer() {
    setMinutes(userTime)
    setseconds(0)
  }

  function handleTimeChange(e) {
    const timerSelected = e.target.value

    setUserTime(timerSelected)
    setMinutes(timerSelected)
    setseconds(0)
  }

  function handleAddTask(e) {
    const addNameTask = e.target.value
    setTask(addNameTask)
  }

  return (
    <>
      <Slide direction="top" in={alertIsActive} style={{ zIndex: 10 }}>
        <TimerFinishedAlert
          onClose={() => setAlertIsActive(false)}
          time={userTime}
        />
      </Slide>
      <Flex width="100%" maxWidth="580" direction="column" gap={4} mt={120}>
        <Heading color="red.500">Pomodoro</Heading>
        <Container px={0} mx={0}>
          <Text
            bg="black"
            textAlign="center"
            borderRadius={8}
            color="gray.200"
            fontSize="64"
            py={6}
            fontWeight="bold"
          >
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </Text>
          <FormControl mt={8}>
            <Flex direction="column" gap={8}>
              <Container m={0} p={0}>
                <FormLabel fontSize={18} color="gray.100">
                  Nome da tarefa
                </FormLabel>
                <Input
                  mt={2}
                  width="100%"
                  type="text"
                  color="gray.100"
                  fontWeight="semibold"
                  value={task}
                  onChange={handleAddTask}
                  isDisabled={isActive}
                />
              </Container>
              <Container m={0} p={0}>
                <FormLabel fontSize={18} color="gray.100">
                  Definir tempo (minutos)
                </FormLabel>
                <Input
                  mt={2}
                  width="100%"
                  type="number"
                  color="gray.100"
                  fontWeight="semibold"
                  value={userTime}
                  onChange={handleTimeChange}
                  isDisabled={isActive}
                />
                {!validation ? (
                  <FormHelperText
                    mt={3}
                    fontSize={14}
                    color="red.500"
                    outline="none"
                  >
                    Preencha todos os campos!
                  </FormHelperText>
                ) : (
                  ''
                )}
              </Container>
            </Flex>
          </FormControl>
        </Container>
        <HStack mt={4}>
          <Button
            onClick={toggleTime}
            width={100}
            colorScheme={isActive ? 'red' : 'gray'}
          >
            {isActive ? 'Pausar' : 'Iniciar'}
          </Button>
          <Button
            color="gray.100"
            onClick={resetTimer}
            colorScheme="whiteAlpha"
          >
            Reiniciar
          </Button>
        </HStack>
        {historyTask.length === 0 ? null : <HistoryTask task={historyTask} />}
      </Flex>
    </>
  )
}
