import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

export function HistoryTask({ task }) {
  return (
    <>
      <Accordion allowMultiple bg="blackAlpha.700" mt={4} mb={8} rounded={4}>
        <AccordionItem border="none">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                fontSize={20}
                color="gray.100"
                flex="1"
                textAlign="left"
              >
                Histórico
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexGrow="1" justifyContent="center" alignItems="center">
              <TableContainer width="100%">
                <Table variant="striped" colorScheme="blackAlpha">
                  <Thead>
                    <Tr>
                      <Th color="gray.100">Nome da tarefa</Th>
                      <Th color="gray.100">Tempo</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {task.map((task, index) => {
                      return (
                        <Tr key={index}>
                          <Td color="gray.100" fontWeight="semibold">
                            {task.task}
                          </Td>
                          <Td color="red.500">{task.userTime}:00 minuto(s)</Td>
                        </Tr>
                      )
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
