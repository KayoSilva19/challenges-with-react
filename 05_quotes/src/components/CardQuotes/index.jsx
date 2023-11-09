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
  const [translate, setTranslate] = useState('')

  useEffect(() => {
    setTranslate('')
  }, [text])

  function translateQuote(idioma) {
    axios
      .post('https://libretranslate.de/translate', {
        q: text,
        source: 'pt',
        target: idioma,
      })
      .then(async function (response) {
        const data = await response.json()
        setTranslate(data.translatedText)
      })
      .catch(function (error) {
        console.error('Erro ao traduzir citação:', error)
      })
  }

  return (
    <SimpleGrid mt={10}>
      <Card height="450">
        <CardHeader>
          <Heading size="lg"> Citações</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="20" maxWidth="360">
            {translate === true ? translate : text}
          </Text>
          <Text mt="2" color="gray.500">
            - {author}
          </Text>
        </CardBody>
        <CardFooter gap={4}>
          <Button
            bg="purple.500"
            color="gray.100"
            colorScheme="purple"
            onClick={() => translateQuote('en')}
          >
            Traduzir para Inglês
          </Button>
          <Button
            bg="blackAlpha.700"
            color="gray.100"
            colorScheme="blackAlpha"
            onClick={() => translateQuote('es')}
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
          mt="4"
          onClick={handleNextQuote}
        >
          Próxima Citação
        </Button>
      </Card>
    </SimpleGrid>
  )
}
