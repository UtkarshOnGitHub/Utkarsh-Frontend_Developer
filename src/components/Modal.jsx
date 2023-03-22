import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
} from "@chakra-ui/react";

export default function ModalForList({ onOpen, toClose, dataForModal }) {
  const handlePassValue = () => {
    toClose(false);
  };
  console.log(dataForModal,"f")
  return (
    <>
      <Modal isOpen={onOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hers What We Get By Antrikash</ModalHeader>
          <ModalBody></ModalBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Key</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Serial No.</Td>
                  <Td>{dataForModal?.serial}</Td>
                </Tr>
                <Tr>
                  <Td>Status</Td>
                  <Td>{dataForModal?.status}</Td>
                </Tr>
                <Tr>
                  <Td>Type</Td>
                  <Td>{dataForModal?.type}</Td>
                </Tr>
                <Tr>
                  <Td>Land Landings</Td>
                  <Td>{dataForModal?.land_landings}</Td>
                </Tr>
                <Tr>
                  <Td>Water Landings</Td>
                  <Td>{dataForModal?.water_landings}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlePassValue}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
