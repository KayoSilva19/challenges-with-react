import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

import citacoes from '../../data/dataQuotes'
import { useState } from 'react'

export function CardQuotes() {
  const [indice, setIndice] = useState(0)

  function handleNextQuote() {
    if (indice === 11) {
      return setIndice(0)
    }
    setIndice(indice + 1)
  }
  return (
    <SimpleGrid mt={10}>
      <Card height="450">
        <CardHeader>
          <Heading size="lg"> Citações</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="20" maxWidth="360">
            {citacoes[indice].texto}
          </Text>
          <Text mt="2" color="gray.500">
            - {citacoes[indice].autor}
          </Text>
        </CardBody>
        <CardFooter gap={4}>
          <Button bg="purple.500" color="gray.100" colorScheme="purple">
            Traduzir para Inglês
          </Button>
          <Button bg="blackAlpha.700" color="gray.100" colorScheme="blackAlpha">
            Traduzir para Espanhol
          </Button>
        </CardFooter>
        <Button
          rounded="none"
          bg="blue.400"
          color="gray.100"
          fontWeight="semibold"
          fontSize="18"
          colorScheme="blue"
          mt="4"
          onClick={handleNextQuote}
        >
          Próxima Citação
        </Button>
      </Card>
    </SimpleGrid>
  )
}
