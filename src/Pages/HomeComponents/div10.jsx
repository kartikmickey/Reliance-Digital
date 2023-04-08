import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import './div3.css';
// className='div3'
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
        
      </Flex>
    );
  }
  
  function ProductAddToCart(
    {name,brand,category, emi,id, img, keyfeatures,mrp, price, save,
    warranty }
  ) {
    name = name.substring(0, 32)
    
        const navigate = useNavigate();
        let Mrp= +mrp
  
    return (
       
      <Flex 
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
                {name  }
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

const Div10 = () => {
    const [data, setData]= useState([]);
    const [total , setTotal] = useState(1);
    const [page, setPage] = useState(1)


     useEffect(()=>{
        axios(`https://creepy-llama.cyclic.app/products?_page=${page}&_limit=3&category=TV`)
        .then((res)=>{
            setData(res.data)
            setTotal(Math.ceil(+res.headers['x-total-count']/3))
        })
     },[page])

     if(page> total){
        setPage(total)
     }
     if(page<1){
        setPage(1)
     }
    //  console.log(data)


    const top = useBreakpointValue({ base: '90%', md: '71%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });
  return (
    <div style={{height: "auto",
    marginTop: "7px",
    backgroundColor: "white", padding: "30px" }} >
        <p style={{color: "#333333",fontSize:"20px", lineHeight: "14px", fontWeight:"400" }} >Trending in Televisions
 
       <button style={{ backgroundColor: "#003380",fontSize: "12px", padding: "5px", color: "white" , marginLeft: "5px" }} >
           View all 
        </button>
      
        </p>
        <div className='div3' style={{display: "grid" , gap: "20px" , margin: "25px" } }  >
{data?.map((e)=>
    <ProductAddToCart key={e.id} name={e.name} brand={e.brand} category={e.category} emi={e.emi} id={e.id} img={e.img} keyfeatures={e.keyfeatures} mrp={e.mrp} price={e.price} save={e.save}
    warranty={e.warranty} 
    />
    )}
    <img style={{margin: "auto"}} src='https://www.reliancedigital.in/medias/Trending-in-TVs-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NDYyOHxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDBhLzk5MzkyMDU0MjMxMzQuanBnfGRmODcwYWI0YjUzMjA0NDBhNmQzMjNlZWE3ZGZlYzYzMThlMDBiNWI0ZWE3MzMxYzRjYmYyNGQ1OGU4NjgyNjg' />
        </div>
         <IconButton
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
        <BiLeftArrowAlt />
      </IconButton>
    
      <IconButton
        aria-label="right-arrow"
        variant='outline'
        colorScheme="red"
      
        backgroundColor= "#EEEEEE"
        _hover={{
            backgroundColor: "white",
        }}
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
       
        onClick={() => setPage(page+1)}
        >
        <BiRightArrowAlt />
      </IconButton>
    </div>
  )
}

export default Div10