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

import { useEffect, useState } from 'react'
import axios from 'axios'

export function CardQuotes({ text, author, handleNextQuote }) {
  const [translateFrom, setTranslateFrom] = useState('pt-BR')
  const [translateTo, setTranslateTo] = useState('')

  useEffect(() => {
    setTranslateTo('')
    setTranslateFrom('pt-BR')
  }, [text])

  function translateQuote(translateTo) {
    axios
      .get(
        `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`,
      )
      .then(async (response) => {
        const data = response.data.responseData.translatedText
        const setFromData = response.data.matches.map(
          (matches) => matches.target,
        )[0]
        setTranslateTo(await data)
        setTranslateFrom(await setFromData)
      })

      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <SimpleGrid mt={10}>
      <Card min-height="450">
        <CardHeader>
          <Heading size="lg"> Citações</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="20" maxWidth="360">
            {translateTo !== '' ? translateTo : text}
          </Text>
          <Text mt="2" color="gray.500">
            - {author}
          </Text>
          {translateTo !== '' ? (
            <Button
              bg="transparent"
              color="blue.400"
              colorScheme="transparent"
              onClick={() => translateQuote('pt-BR')}
              p="0"
              mt={2}
              fontWeight="medium"
            >
              Traduzir para Português Br
            </Button>
          ) : (
            ''
          )}
        </CardBody>
        <CardFooter gap={4} py="0">
          <Button
            bg="purple.500"
            color="gray.100"
            colorScheme="purple"
            onClick={() => translateQuote('en-GB')}
          >
            Traduzir para Inglês
          </Button>
          <Button
            bg="blackAlpha.700"
            color="gray.100"
            colorScheme="blackAlpha"
            onClick={() => translateQuote('es-ES')}
          >
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
          mt="8"
          onClick={handleNextQuote}
        >
          Próxima Citação
        </Button>
      </Card>
    </SimpleGrid>
  )
}
