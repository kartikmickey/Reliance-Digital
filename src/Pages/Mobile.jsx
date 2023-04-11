import React , { useState, useContext } from 'react'
import { useEffect } from 'react';
import './all.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Flex,
    Circle,
    Box,
    Button,
    Select,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    IconButton, useBreakpointValue,
    Tooltip,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Context } from '../Components/Context';

function Rating({ rating, numReviews }) {
    return (
      <Flex d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box> */}
      </Flex>
    );
  }
  
  function ProductAddToCart(
    {name,brand,category, emi,id, img, keyfeatures,mrp, price, save,
    warranty }
  ) {
    name = name.substring(0, 32)
    // console.log(name,brand,category, emi,id, img, keyfeatures,mrp, price, save,
    //     warranty )
        const navigate = useNavigate();
        let Mrp= +mrp
  
    return (
       
      <Flex 
    //   p={50}
       w="full" alignItems="center" justifyContent="center">
        <Box
        onClick={()=>navigate(`/products/${id}`)}
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {id && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image
            src={img}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            width={300}
            margin={"auto"}
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {id && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                  Save {save} %
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="m"
                fontWeight="semibold"
                as="h4"
                color="#003380"
                _hover={{
                    color: "#e4252a"
                  }}
                lineHeight="tight"
                isTruncated>
                   {name || "Redmi 10A 32 GB, 3 GB RAM, Charcoal Black, Mobile Phone(492850145)" }
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={Math.floor(Math.random() * 5) + 3} numReviews="1" />
              <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}  mr={"-18px"} >
                <Box as="span" color={'gray.600'} fontSize="lg">
                ₹
                </Box>
                {price}
              </Box>
              <Box fontSize="m" textDecoration={'line-through'} color={useColorModeValue('gray.800', 'white')} ml={"0%"}  mt={"5px"} >
                <Box as="span" color={'gray.600'} fontSize="s">
                ₹
                </Box>
                 {Mrp.toFixed(2)}
              
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }


const Mobile = () => {

    const [data, setData]= useState([]);
    const [total , setTotal] = useState(1);
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState("desc")
    const [sort, setSort] = useState("price")
    const {  search } = useContext(Context)
    // console.log(search)

     useEffect(()=>{
        axios(`https://creepy-llama.cyclic.app/products?_page=${page}&_limit=12&q=${search}&_sort=${sort}&_order=${order}&category=Mobile`)
        .then((res)=>{
            setData(res.data)
            setTotal(Math.ceil(+res.headers['x-total-count']/12))
        })
     },[page, search , order,sort ]);

     console.log(data)
     if(page < 1){
        setPage(1)
     }
     if(page > total){
        setPage(total)
     }
console.log(total)
  return (
    <>
   {/* <Button size='md'  mt={"20px"}
      ml={"40.5%"}
      mr={"2%"}
      onClick={()=>setOrder("asc")}
     bg={useColorModeValue("#003380", 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "#e4252a",
                boxShadow: 'lg',
              }}  >
    Low To High
  </Button>
  <Button  size='md'  mt={"20px"}  bg={useColorModeValue("#003380", 'gray.50')}
   onClick={()=>setOrder("desc")}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "#e4252a",
                boxShadow: 'lg',
              }} >
  High To Low 
  </Button> */}
  <div style={{display: "grid" , gridTemplateColumns: "repeat(3, 1fr )"   } } >
    <Select onChange={(e)=>setSort(e.target.value)} size='md'
   m={"auto"}  mt={"20px"}
      // ml={"40.5%"}
      // mr={"2%"}
      w={"120px"}
      border={"none"}
     bg={useColorModeValue("#003380", '"#e4252a"')}
              color={useColorModeValue('white', "#e4252a")}
              _hover={{
                transform: 'translateY(2px)',
                bg: "#e4252a",
                boxShadow: 'lg',
              }} 
              // placeholder='Filter By'
               >
     <option style={{
    backgroundColor: "#e4252a"
  }}  value='price'>Filter By</option>
  <option style={{
    backgroundColor: "#003380"
  }}  value='save'>Discount</option>
  <option style={{
    backgroundColor: "#e4252a"
  }}  value='warranty'>Warranty</option>
  <option style={{
    backgroundColor: "#003380"
  }}  value='emi'>EMI</option>
</Select>

   <Button size='md' 
   m={"auto"}
    mt={"20px"}
      // ml={"40.5%"}
      // mr={"2%"}
      w={"120px"}
      onClick={()=>setOrder("asc")}
     bg={useColorModeValue("#003380", 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "#e4252a",
                boxShadow: 'lg',
              }}  >
    Low To High
  </Button>
  <Button 
   size='md' 
   w={"120px"} 
   m={"auto"}
   mt={"20px"}  bg={useColorModeValue("#003380", 'gray.50')}
   onClick={()=>setOrder("desc")}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "#e4252a",
                boxShadow: 'lg',
              }} >
  High To Low 
  </Button>
  </div>
    <div className='div3'  style={{display: "grid" ,  gap: "20px" , margin: "25px" } }  >

    {data?.map((e)=>
        // console.log(e.name);
        <ProductAddToCart key={e.id} name={e.name} brand={e.brand} category={e.category} emi={e.emi} id={e.id} img={e.img} keyfeatures={e.keyfeatures} mrp={e.mrp} price={e.price} save={e.save}
    warranty={e.warranty} 
        />
    )}
            </div>
            <Button size='md'  mb={"20px"}
      ml={"42.5%"}
    //   disabled={page==1}
      onClick={()=>setPage(page-1)}
      mr={"2%"}
     bg={useColorModeValue("#003380", 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "#e4252a",
                boxShadow: 'lg',
              }}  >
   Prev
  </Button>
  <Button  size='md'
//   disabled
  mr={"2%"}
  mb={"20px"}  bg={useColorModeValue("#003380", 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "#e4252a",
                boxShadow: 'lg',
              }} >
  {page}
  </Button>
  <Button 
    //   disable={page==total}
      onClick={()=>setPage(page+1)}
  size='md'  mb={"20px"}  bg={useColorModeValue("#003380", 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "#e4252a",
                boxShadow: 'lg',
              }} >
Next
  </Button>
            </>
  )
}

export default Mobile