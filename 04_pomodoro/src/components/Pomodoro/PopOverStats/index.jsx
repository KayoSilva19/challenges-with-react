import {
  Button,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  ListIcon,
  Flex,
} from '@chakra-ui/react'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsClockHistory, BsFillClockFill } from 'react-icons/bs'
import { BiTask } from 'react-icons/bi'

export function PopOverStats({ tasks }) {
  const countTimerGeneral = tasks
    .map((task) => Number(task.userTime))
    .reduce((acumulador, elemento) => acumulador + elemento, 0)

  const timerInHours =
    countTimerGeneral > 60 ? countTimerGeneral / 60 : 'Menos de uma hora'
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button bg="transparent" color="gray.100">
            <AiOutlineInfoCircle size={32} />
          </Button>
        </PopoverTrigger>
        <PopoverContent bg="red.500">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="bold" fontSize={18} color="gray.100">
            Informações gerais
          </PopoverHeader>
          <PopoverBody fontWeight="medium">
            <List spacing={3}>
              <ListItem>
                <Flex gap={4} color="gray.100" alignItems="center">
                  <BiTask size={22} />
                  Total de tarefas realizadas: {tasks.length}
                </Flex>
              </ListItem>
              <ListItem>
                <Flex gap={4} color="gray.100" alignItems="center">
                  <BsClockHistory size={22} />
                  Total trabalhado:{' '}
                  {countTimerGeneral > 1
                    ? `${countTimerGeneral} minutos`
                    : `${countTimerGeneral} minuto`}
                </Flex>
              </ListItem>
              <ListItem>
                <Flex gap={4} color="gray.100" alignItems="center">
                  <BsFillClockFill size={22} />
                  Total trabalhado em horas: {timerInHours}
                </Flex>
              </ListItem>
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  )
}
