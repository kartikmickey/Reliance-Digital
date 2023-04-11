import React from 'react';

import {
    Button,
    useDisclosure, 
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
   
    AlertDialogFooter
    } from '@chakra-ui/react';
import {useNavigate } from 'react-router-dom';

function Delete({id,price, qty}) {
  console.log(id)
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const handleDelete = ()=> {
    let get = JSON.parse(localStorage.getItem("cart")|| "[]") 
    let newGet = get.filter((e)=> 
    e.id !== id
    )
    localStorage.setItem("cart", JSON.stringify(newGet))
    let totalP = +localStorage.getItem("total") || 0
      totalP = +totalP - +price*qty
      let setTotalP = localStorage.setItem("total", +totalP)
      localStorage.setItem(`qty${id}`, 1) 
    // navigate("/cart")
    window.location.reload()
    onClose()
  }
   
 
    return (
      <>
        <Button ml={2} bg={"#e4252a"} colorScheme='red' onClick={onOpen}>
         Remove
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' color={"#e4252a"} fontWeight='bold'>
               Remove Item
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button
                
                ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button bg={"#e4252a"} colorScheme='red' onClick={handleDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export default Delete;