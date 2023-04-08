import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import './div3.css';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Div7() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://www.reliancedigital.in/medias/Redmi-Note-12-5G-Series-NPI-Banner-11-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2MTM2M3xpbWFnZS9qcGVnfGltYWdlcy9oNGMvaDZmLzk5NDQ5MDc0NDgzNTAuanBnfDY3MGJlYzc4OTFkYzE4Y2NlYTFhMTRjOTY0MjNkZGJlNzNmYzQ4MTkxYTkxODcyZjczZTllMTlmMjc2OGZkZDk',
    'https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g2Ny85OTIyNDU2MTkxMDA2LmpwZ3w0MGQxZjFhYjQ0ZjU1NTQzZjJiOGJmYzZhMDg5NTY5M2Y3NzIxZDkzOTQ2Yjg4YmNmOWZlMzc4OWM0YjlkMjA2',
    'https://www.reliancedigital.in/medias/Bose-Earbuds-NPI-Banner-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w1NjI4OHxpbWFnZS9qcGVnfGltYWdlcy9oNWUvaDIzLzk5NDk5NjEzODgwNjIuanBnfDU5OTYxYmIzNjI3NDRkOGI0YzMwMGM4NmM2OGU0OTZmODRhMWRjYmMzM2ExMjRiMzRkOTM4M2Y4OGJlNmY4ZTc',
    'https://www.reliancedigital.in/medias/Oppo-A78-5G-NPI-Banner-20-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2OTUzNnxpbWFnZS9qcGVnfGltYWdlcy9oMjUvaDNjLzk5NTA0Nzc3MTM0MzguanBnfDI4OTBjMzFmNzA4OWQ4OWY1MDcxZTY2MjNlZWJjZWRlZWQ3YTFhNjMzZjM1MDM5ZmQ2Zjc5NDA1MGJkNWYyYzQ'
  ];

  return (
    <Box
    mt={2}
    position={'relative'}
    //   height={'auto'}
    //   width={"100%"}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
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
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="red"
        variant='outline'
        backgroundColor= "#EEEEEE"
        _hover={{
            backgroundColor: "white",
        }}
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            // height={'300px'}
            className="imgH"
            // width={'100%'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}