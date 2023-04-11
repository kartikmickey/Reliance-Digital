import {
    Button,
    useDisclosure, 
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Modal,
    ModalFooter
    } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Modal1() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    return (
      <>
        <Button 
        bg={"#003380"}
         colorScheme={"blue"} onClick={onOpen}>Pay Now </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color={"green"} >Congratulations!</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
             Thank You for Shopping.
             {/* <br/> */}
             Order Placed Successfully!
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' mr={3} onClick={()=>navigate("/")}
              // {onClose}
              >
                Continue Shopping
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Modal1