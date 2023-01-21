import React from 'react'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
  
  export default function Login() {
    const navigate = useNavigate()
    return (
      <Flex
        // minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} 
        py={12}
         px={6}
         >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={"#003380"} >Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'#e4252a'}>
              to enjoy all of our cool <Link color={'#003380'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'#003380'}>Forgot password?</Link>
                </Stack>
                <Button
                 onClick={()=>navigate("/")}
                 bg={useColorModeValue('#003380', 'gray.50')}
                 color={useColorModeValue('white', 'gray.900')}
                //  textTransform={'uppercase'}
                 _hover={{
                   transform: 'translateY(2px)',
                   bg: "#e4252a",
                   boxShadow: 'lg',
                 }}
                //   bg={'blue.400'}
                //   color={'white'}
                //   _hover={{
                //     bg: 'blue.500',
                //   }}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

