import React , {useContext} from 'react'
import { Context } from '../Components/Context'
import { useParams } from 'react-router-dom';
import axios from 'axios';
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

const Cart = () => {
    const {id}  = useParams();
    // const {cart, setCart} = useContext(Context);
    const [data, setData] = React.useState(
      {brand: "Redmi",
category: "Mobile",
emi: "384.06",
id: 26,
img: "https://www.reliancedigital.in/medias/Redmi-10A-Smartphones-492850147-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzQxOTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGI5L2gyMy85ODMyNDI1NzUwNTU4LmpwZ3wyZWFmNWZkNGQ1NmE5ZmE3Mzg4M2YzNjVhNWJhMDg0ZTdmYWY3MzY2ZjRmM2I1Y2I0Mzc3MTAzODU2NzQxM2I5",
keyfeatures: ['16.58 cm (6.53 inch) 1600 x 720 HD+ Display', '3 GB Memory, 32 GB Storage', '13 MP Rear Camera', '5 MP Selfie Camera', '2+1 Dedicated Sim Card Slots (nano SIM + nano SIM + microSD up to 512GB)', 'Rubberized Seals and Corrosion-proof Ports'],
mrp: "10999",
name: "",price: 7999,save: "27",
warranty: "1",
      }
    );
    const [qty, setQty] = React.useState(1)

    React.useEffect(()=>{
        axios(`https://creepy-llama.cyclic.app/products/${id}`)
        .then((res)=>{
            setData(res.data)
            
        })
    },[id])

    const {brand,
        category,
        emi,
        img,
        keyfeatures,
        mrp,
        name, price,
        save,
        warranty
        } = data

        let Mrp = +mrp
        // let Save = ((Mrp * save)/100) . toFixed(0)
    // console.log(id)

    if(qty>5)
{
  setQty(5)
}
if(qty<1)
{
  setQty(1)
}
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
      onClick={()=>setQty(qty-1)}
      size='sm'>
-
  </Button>
  <Button colorScheme='white' color={"black"} size='sm' >
    {qty}
  </Button>
  <Button
     onClick={()=>setQty(qty+1)}
  colorScheme='gray' size='sm'>
    +
  </Button>
      </Box>
    </CardBody>

    <CardFooter>
      {/* <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button> */}
      <Modal1/>
      <Delete/>
    </CardFooter>
  </Stack>
</Card>

<Text color="#e4252a"
                _hover={{
                    color: "#003380"
                  }}  fontSize={"3xl"}  textAlign={"center"} margin={"auto"} mb={10}  >Total: ₹{price*qty} </Text>
    </>
  )
}

export default Cart