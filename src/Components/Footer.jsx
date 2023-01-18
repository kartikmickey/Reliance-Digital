import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#003380', 'gray.900')}
      color={useColorModeValue('white', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>PRODUCT CATEGORIES</ListHeader>
             <Link 
             fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>Smartphones</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>Laptops</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>DSLR Cameras</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>Televisions</Link>
 <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>Air Conditioners</Link>
              <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>Refrigerators</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              Kitchen Appliances
             </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              Accessories
             </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              Personal Care & Grooming
             </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>RESOURCE CENTRE</ListHeader>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>Product Reviews</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>Buying Guides</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>How Tos</Link>
 <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              Featured Stories
             </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              Events & Happenings
             </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              Nearest Store
             </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>SITE INFO</ListHeader>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>About Reliance Digital</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>resQ Services</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>Site Map</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>Gift Cards</Link>
 <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              Corporate Enquires
             </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              Contact Us
             </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>POLICIES</ListHeader>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>
Terms of Use</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>
FAQs</Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>

Cancellation and Return Policy
  </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}} href={'#'}>
Pricing and Payments Policy</Link>
 <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              
Shipping and Delivery Policy
             </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
               
Privacy Policy
             </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
             
E-waste Recycling Policy
             </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              
EMI and Additional Cashback T&C
             </Link>
            
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
              
              RelianceOne Loyalty Program T&C
              
             </Link>
             <Link 
               fontSize={{ base: "small",  md: "medium" }}
              _hover={{
  color: "rgba(255, 255, 255, 0.698)",
  fontSize:"medium"
}}
             href={'#'}>
             Caution Notice
             </Link>
          </Stack>

          <Stack align={'flex-start'} >
            <ListHeader>
EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</ListHeader>
            {/* <AppStoreBadge /> */}
            {/* <Image 
height="50px"             src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" />
            <Image 
            height="50px"   src="https://www.reliancedigital.in/build/client/images/google_play_store.png" /> */}
          </Stack>
          <Stack align={'flex-start'} >
          <Image 
height="50px"             src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" />  </Stack>
          <Stack align={'flex-start'} >
           
            <Image 
            height="50px"   src="https://www.reliancedigital.in/build/client/images/google_play_store.png" />
          </Stack>

          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>

        </SimpleGrid>
      </Container>
      <Box
         bg={"#0a244a"}
        // borderTopWidth={1}
        // borderStyle={'solid'}
        // borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
        <Container
         fontSize={"small"}
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={'column'}
          spacing={4}
          justify={{ md: 'space-between' }}
          textAlign={"center"}
          align={{ md: 'center' }}>
<Text
textDecoration={"underline"}
>
Disclaimer
</Text>
          <Text>
          Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
          </Text>
         
        </Container>
      </Box>
      <Box
        margin={"auto"}
         bg={"#0a244a"}
        borderTopWidth={1}
        borderStyle={'solid'}
        textAlign={"center"}
        borderColor={useColorModeValue('#132c51', 'gray.700')}>
        <Container
          as={Stack}
          // textAlign={"center"}
           fontSize={ "small"}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          // textAlign={"center"}
          align={{ md: 'center' }}
          textAlign={'center' }
          margin={"auto"}
          >
          <Text  
            margin={"auto"}
          textAlign={"center"} >© 2023 Reliance Digital. All Rights Reserved</Text>
          
        </Container>
      </Box>
    </Box>
  );
}