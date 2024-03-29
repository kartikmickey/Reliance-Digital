import React,{useState } from 'react';
import axios from "axios";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';
  import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
  
  export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
  
    let handleSubmit = async () => {
      let payload = {
        email,
        password,
      };
      try {
        let sendData = await axios.post(
          `https://maroon-sea-urchin-tam.cyclic.app/users/login`,
          payload
        );
        if (sendData.status === 200) {
          localStorage.setItem("token", sendData.data.token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `${sendData.data.token}`;
          toast({
            title: "logged in Successfully.",
            description: `You have successfully loggedIn`,
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          navigate("/")
        }
      } catch (error) {
        toast({
          title: "Wrong Credentials.",
          description: `Check your Email and password before login`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };
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
                <Input type="email"  value={email}
                onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
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
                //  onClick={()=>navigate("/")}
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
                onClick={handleSubmit}
                  >
                  Sign in
                </Button>
              </Stack>
              <Text fontSize={"lg"} color={"gray.600"}>
              Don't have an account?{" "}
              <Link style={{color:"#e4252a", fontSize: "17px", textDecorationLine : "underline"}}  to="/signup">
                Sign up
              </Link>
            </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

