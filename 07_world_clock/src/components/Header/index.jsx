import { Box, Flex, Text } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      bg="blackAlpha.600"
      flex="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="xs"
      p={4}
    >
      <Text fontSize="3xl" as="b" color="gray.50">
        Relógio Mundial
      </Text>
    </Flex>
  )
}
