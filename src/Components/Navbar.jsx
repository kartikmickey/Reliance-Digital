import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Input,
    Collapse,
    Image,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { FaShoppingCart } from 'react-icons/fa';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    
   
    return (
      
      <Box zIndex={3} position={"fixed"} w={"100%"}  bg={"#e4252a"} >
        <Flex
        // position={"fixed"}
          // bg={"#003380"}
          color={useColorModeValue('gray.600', 'white')}
          minH={{base: "60px", md: "120px"}}
          py={{ base: 2 }}
          px={{ base: 4 }}
          // borderBottom={1}
          // borderStyle={'solid'}
          // borderColor={
            // "black"
            // useColorModeValue('gray.200', 'gray.900')
          // }
          align={'center'}>
          <Flex
          //  bg={"yellow"}
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
            color={"white"}
            _hover={{
              color: "#003380",
              bg: "white"
            }}
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} flexDirection={"column"}   >
          
            <Flex
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              ml={10}
              color={useColorModeValue('gray.800', 'white')}>
               <Image src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" />
               <Input
               display={{base: "none", md: "flex"}}
               border="none"
               borderRadius="20px"
               mt={5}
               bg={"white"}
               ml="260px"
               width="520px"
          //  variant='unstyled'
            placeholder='Find Your Favourite Products' />
            </Flex>
         {/* <Box  bg={"#003380"} >h</Box> */}
         <Flex display={{ base: 'none', md: 'flex' }} ml={10} mt={3}   >
              <DesktopNav />
            </Flex>
          </Flex>
          {/* <Input
          //  variant='unstyled'
            placeholder='Unstyled' /> */}
          <Stack
          //  bg={"green"}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            
            spacing={6}>
             
             

              
            <Button
            // mr={0}
            as={'a'}
            fontSize={'2xl'}
            fontWeight={400}
            variant={'link'}
            _hover={{
              color: "#003380"
            }}
            color={"white"}
            href={'#'}>
              
                <FaShoppingCart  />

              
                {/* Cary */}
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={"#003380"}
              href={'#'}
              _hover={{
                bg: 'white',
                color: "#003380"
              }}>
              Login
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} 
        // color={"green"}
        animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
     
    );
  }
  
  const DesktopNav = () => {
    const linkColor = 
    // "#003380"
    "white"
    // useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('#003380', '#003380');
    const popoverContentBgColor = useColorModeValue('#003380', '#003380');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  color={"white"}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav  key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        
        rounded={'md'}
        _hover={{ bg: useColorModeValue('white', 'gray.900') ,color:'#003380' }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#e4252a' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'#e4252a'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('#003380', 'gray.800')}
        color={"white"}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem
          color={'white'}
          key=
          {navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('white', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
 
  
  const NAV_ITEMS=[
    {
      label: 'MOBILES & TABLETS',
      children: [
        {
          label: 'Smartphones',
          subLabel: 'Apple',
          href: '#',
        },
        {
          label: 'SMARTWATCHES',
          subLabel: 'Samsung',
          href: '#',
        },
        {
          label: 'Accessories',
          subLabel: 'Tablet Accessories',
          href: '#',
        },
        {
          label: 'Headphones & Headsets',
          subLabel: '',
          href: '#',
        },
        {
          label: 'AI Learning Robots',
          subLabel: "",
          href: '#',
        },
        {
          label: 'Tablets & eReaders',
          subLabel: 'Everday Day use Tablets below 15000',
          href: '#',
        },
        {
          label: 'Power Banks',
          subLabel: '',
          href: '#',
        },
        {
          label: 'eSlates',
          subLabel: '',
          href: '#',
        }
      ],
    },
    {
      label: 'TELEVISONS',
      children: [
        {
          label: 'Gaming',
          subLabel: 'Gaming Consoles',
          href: '#',
        },
        {
          label: 'Televisions',
          subLabel: 'Samsung',
          href: '#',
        },
        {
          label: 'Projectors',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Streaming Devices',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Reconnect Disney | Marvel Audio Collection',
          subLabel: "",
          href: '#',
        },
        {
          label: 'TV & Audio Accessories',
          subLabel: '',
          href: '#',
        }
       
      ],
    },
    {
      
      label: 'HOME APPLIANCES',
      children:  [
        {
          label: 'Air Conditioners',
          subLabel: 'Split Air Conditioners',
          href: '#',
        },
        {
          label: 'Air Coolers',
          subLabel: 'Samsung',
          href: '#',
        },
        {
          label: 'Air Purifiers',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Washing Machines',
          subLabel: 'Fully Automatic',
          href: '#',
        },
        {
          label: 'Refrigerators',
          subLabel: "Single Door",
          href: '#',
        },
        {
          label: 'Vaccum Cleaners',
          subLabel: '',
          href: '#',
        }
        
      ],
    },
    {
      label: 'AUDIO',
      children: [
        {
          label: 'Bluetooth & WiFi Speakers', 
          subLabel: 'Bluetooth Speakers',
          href: '#',
        },
        {
          label: 'TV Speakers & Soundbars', 
          subLabel: 'Soundbars',
          href: '#',
        },
        {
          label: 'Musical Instruments ',
          subLabel: 'Guitar & Ukuleles ',
          href: '#',
        },
        {
          label: 'Headphones & Headsets',
          subLabel: 'True Wireless',
          href: '#',
        },
        {
          label: 'Microphones',
          subLabel: "",
          href: '#',
        }
      ],
    },
    {
      label: 'COMPUTERS',
      children: [
        {
          label: 'Bluetooth & WiFi Speakers', 
          subLabel: 'Bluetooth Speakers',
          href: '#',
        },
        {
          label: 'Laptops', 
          subLabel: 'Student Laptops',
          href: '#',
        },
        {
          label: 'Computer Accessories ',
          subLabel: 'Batteries',
          href: '#',
        },
        {
          label: 'Input Devices',
          subLabel: 'Keyboards',
          href: '#',
        },
        {
          label: 'Internet & connectivity Devices',
          subLabel: "",
          href: '#',
        }
      ],
    },
    {
      label: 'CAMERAS',
      children: [
        {
          label: 'DSLR Cameras',
          subLabel: 'Nikon',
          href: '#',
        },
        {
          label: 'Mirrorless Cameras',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Digital Camera Accessories',
          subLabel: 'Action Camera Accessories',
          href: '#',
        },
        {
          label: 'Camera Lens',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Binoculars',
          subLabel: "",
          href: '#',
        },
        {
          label: 'Photo Storage Devices ',
          subLabel: 'Memory Cards',
          href: '#',
        },
        {
          label: 'Action Cameras',
          subLabel: '',
          href: '#',
        },
        {
          label: 'ProSumer Cameras',
          subLabel: '',
          href: '#',
        }
      ],
    },
    {
      label: 'KITCHEN APPLIANCES',
      children: [
        {
          label: 'Microwave Ovens', 
          subLabel: '',
          href: '#',
        },
        {
          label: 'Water Purifiers ',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Fruits and Vegetables Cleaner ',
          subLabel: '',
          href: '#',
        },
        {
          label: 'OTG',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Cookwares',
          subLabel: "",
          href: '#',
        },
        {
          label: 'Juicer Mixer Grinders',
          subLabel: 'Hand Mixer',
          href: '#',
        },
        {
          label: 'Induction Cookers',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Food Processors',
          subLabel: '',
          href: '#',
        }
      ],
    },
    {
      label: 'PERSONAL CARE',
      children: [
        {
          label: 'Shavers & Trimmers', 
          subLabel: '',
          href: '#',
        },
        {
          label: 'Hygiene & Personal Care', 
          subLabel: '',
          href: '#',
        },
        {
          label: 'Epilators',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Hair Dryers & Stylers',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Irons',
          subLabel: "",
          href: '#',
        }
      ],
    },
    {
      label: 'ACCESSORIES',
      children: [
        {
          label: 'Bags, Cases & Sleeves', 
          subLabel: '',
          href: '#',
        },
        {
          label: 'Smart Devices', 
          subLabel: 'Smart Plugs',
          href: '#',
        },
        {
          label: 'Batteries',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Headphones & Headsets',
          subLabel: 'True Wireless',
          href: '#',
        },
        {
          label: 'Power Banks',
          subLabel: "",
          href: '#',
        }
      ],
    }
  ]