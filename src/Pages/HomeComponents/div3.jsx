import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import './div3.css';
import {
    Flex,
    Circle,
    Box,
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

// const data = {
//     isNew: true,
//     imageURL:
//       'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
//     name: 'Wayfarer Classic',
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   };
 

  
//   https://creepy-llama.cyclic.app/products?_page=1&_limit=5&category=HomeAppliances
  
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
                {name}
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

const Div3 = () => {
    const [data, setData]= useState([]);
    const [total , setTotal] = useState(1);
    const [page, setPage] = useState(1)
    // const [limit , setLimit] = useState(true);

    console.log(window.screen.width)
     useEffect(()=>{
        axios(`https://creepy-llama.cyclic.app/products?_page=${page}&_limit=4&category=HomeAppliances`)
        .then((res)=>{
            setData(res.data)
            setTotal(Math.ceil(+res.headers['x-total-count']/4))
        })
     },[page])

     if(page> total){
        setPage(total)
     }
     if(page<1){
        setPage(1)
     }
    //  if(window.screen.width <=720){
    //    setLimit(1)
    //   }
    // if(window.screen.width <=1050){
    //     setLimit(2)
    //    }
    // if(window.screen.width <=1330){
    //    setLimit(false)
    //   }
   
    //  console.log(data)


    const top = useBreakpointValue({ base: '90%', md: '15.5%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });
  return (
    <div style={{height: "auto",
    marginTop: "7px",
    // width: "100%",
    backgroundColor: "white", padding: "30px" }} >
        <p style={{color: "#333333",fontSize:"20px", lineHeight: "14px", fontWeight:"400" }} >Home Appliances Fest
 
       <button style={{ backgroundColor: "#003380",fontSize: "12px", padding: "5px", color: "white" , marginLeft: "5px" }} >
           View all 
        </button>
      
        </p>
        <div className='div3' style={{display: "grid" , gap: "20px" , margin: "25px" } }  >

{data?.map((e)=>
    // console.log(e.name);
    <ProductAddToCart key={e.id} name={e.name} brand={e.brand} category={e.category} emi={e.emi} id={e.id} img={e.img} keyfeatures={e.keyfeatures} mrp={e.mrp} price={e.price} save={e.save}
warranty={e.warranty} 
    />
)}
        </div>
        <IconButton
        // display=""
        aria-label="left-arrow"
        variant='outline'
        colorScheme="red"
        backgroundColor= "#EEEEEE"
        _hover={{
            backgroundColor: "white",
        }}
        
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => setPage(page-1)}
        >
        <BiLeftArrowAlt/>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant='outline'
        colorScheme="red"
        // bg={"transparent"}
        backgroundColor= "#EEEEEE"
        _hover={{
            backgroundColor: "white",
        }}
        position="absolute"
        right=
        {side}
        top=
        // {"20px"}
        {top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        // disabled={page==total}
        onClick={() => setPage(page+1)}
        >
        <BiRightArrowAlt />
      </IconButton>
    </div>
  )
}

export default Div3