import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

export function CardQuotes() {
  return (
    <SimpleGrid mt={10}>
      <Card>
        <CardHeader>
          <Heading size="lg"> Citações</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
          <Text>Citação</Text>
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
        >
          Próxima Citação
        </Button>
      </Card>
    </SimpleGrid>
  )
}