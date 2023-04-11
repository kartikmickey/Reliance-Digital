import React , {useEffect} from 'react'
import { Context } from '../Components/Context'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import {
Button,
  Image, 
  Card,
  CardFooter,
  Stack,
  CardBody,
  Heading,
  Text,
  Box
} from '@chakra-ui/react';
import Modal1 from './Moda1l';
import Delete from './Delete';

const NewCart = ({brand,
  category,
  emi,
  img,
  keyfeatures,
  mrp,
  id,
  name, price,
  save,
  warranty
  }) => {
    const navigate = useNavigate()
    const [qty, setQty] = React.useState(+localStorage.getItem(`qty${id}`) || 1)
   
    let Mrp = +mrp
    const handleQty =  (v)=>{
      let totalP = +localStorage.getItem("total") || 0
      totalP = +totalP - +price*qty
      let setTotalP = localStorage.setItem("total", +totalP)
      setQty(qty + v)
      // await totalP = 
      if(qty>5)
      {
        setQty(5)
      }
      if(qty<1)
      {
        setQty(1)
      }
      // Cart()
    }
   
    if(qty>5)
    {
      let totalP = +localStorage.getItem("total") || 0
      totalP = +totalP - +price*qty
      let setTotalP = localStorage.setItem("total", +totalP)
      setQty(5)
    }
    if(qty<1)
    {
      setQty(1)
    }
    let totalP = +localStorage.getItem("total") || 0
    totalP = +totalP + +price*qty
  let setTotalP = localStorage.setItem("total", +totalP)
    console.log(qty)
    let totalQty = +localStorage.getItem(`qty${id}`) || 1
     totalQty = +qty
     localStorage.setItem(`qty${id}`, +totalQty) 
  return (
    <>
    <Card
    margin={"auto"}
    mt={10}
    mb={10}
    width={"80%"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='fit'
    maxW={{ base: '100%', sm: '200px' }}
    src={img}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'
      
      >{brand}</Heading>

      <Text py='2' 
     color="#003380"
       _hover={{
           color: "#e4252a"
         }}
                   >
       {name || "Redmi 10A 32 GB, 3 GB RAM, Charcoal Black, Mobile Phone(492850145)" }
      </Text>
      <Text fontSize={"lg"} color={"green"}  >
      ₹ {price}
      </Text>
      <Box mt={2} >Qty.
      <Button ml={2} colorScheme='gray'
      onClick={()=>handleQty(-1)}
      size='sm'>
-
  </Button>
  <Button colorScheme='white' color={"black"} size='sm' >
    {/* {qty} */}
    {totalQty}
  </Button>
  <Button
     onClick={()=>handleQty(1)}
  colorScheme='gray' size='sm'>
    +
  </Button>
      </Box>
    </CardBody>

    <CardFooter>
      <Delete id={id} qty={qty} price = {price} />
    <Text color="#003380"
    ml={"6"}
    mt={"1"}
                _hover={{
                    color: "#e4252a"
                  }}  fontSize={"2xl"}  textAlign={"center"}  >Total: ₹{price*totalQty} </Text>
        {/* <Button 
        bg={"#003380"}
         colorScheme={"blue"} onClick={()=>navigate("/payment")}>Buy Now </Button> */}
    </CardFooter>
  </Stack>
</Card>

{/* <Text color="#e4252a"
                _hover={{
                    color: "#003380"
                  }}  fontSize={"3xl"}  textAlign={"center"} margin={"auto"} mb={10}  >Total: ₹{price*totalQty} </Text> */}
    </>
  )
}

const Cart = ()=>{
  const navigate = useNavigate()
  let get = JSON.parse(localStorage.getItem("cart")|| "[]") 
  let totalP = +localStorage.getItem("total") || 0

 console.log(get)
  if(get.length <= 0){
    localStorage.setItem("total", 0)
    return(
      <>
      <Card
      margin={"auto"}
      mt={10}
      mb={10}
      width={"80%"}
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
   
  
    <Stack>
      <CardBody m={"auto"} >
        <Heading textAlign={"center"} m={"auto"} size='3xl'
       
        > CART IS EMPTY!</Heading>
  
        
    
       
      </CardBody>
  
      
    </Stack>
  </Card>
      </>
    )
  }
  let setTotalP = localStorage.setItem("total", 0)
  return(
     <>
     {get?.map((e)=>
        // console.log(e.name);
        <NewCart key={e.id} name={e.name} brand={e.brand} category={e.category} emi={e.emi} id={e.id} img={e.img} keyfeatures={e.keyfeatures} mrp={e.mrp} price={e.price} save={e.save}
    warranty={e.warranty} 
        />
    )}
    
    <Text color="#e4252a"
                _hover={{
                    color: "#003380"
                  }}  fontSize={"3xl"}  textAlign={"center"} margin={"auto"} mb={10}  ><Button 
                  bg={"#003380"}
                   colorScheme={"blue"} ml={"10"} onClick={()=>navigate("/payment")}>Buy Now </Button> </Text>
        
     </>
  )
}



export default Cart