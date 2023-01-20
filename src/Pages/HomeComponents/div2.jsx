import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

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

export default function Div2() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://www.reliancedigital.in/medias/iPhone14-CLP-Banner-18-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMDM0MjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ1L2g1MS85OTQ5MjMyODU3MTE4LmpwZ3w3OWFjMWVhZjE0Y2EzNzAyODcyZTBmM2M2MzQ1OTU1YzI2Y2QwYjg4MGYyYTc0NjFmOGNhM2NhYjEyYTk5MTk4',
    'https://www.reliancedigital.in/medias/HP-Laptop-IT-Accessories-Carousel-Banner-Desktop.png?context=bWFzdGVyfGltYWdlc3w3MjExNXxpbWFnZS9wbmd8aW1hZ2VzL2hmOS9oYTQvOTk0OTk2MTY1MDIwNi5wbmd8M2U0NzRhNmU0NWEwZjE1OWJkMjJkMzEwNzViZmUwMmMzYjIxOTk5ZjAzYjRlMDUzNTZhMDcyOWRhNTkwOGM5Ng',
    "https://www.reliancedigital.in/medias/Smartwatches-Carnival-Carousel-Banner-11-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMjE3NjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2hjNy85OTQ1ODI3NzcwMzk4LmpwZ3xmM2IxYjAyZjAzMmZmODYzNjk4OTU5MzdlMzhjNTY1YzU1ZDk3N2Y2MzFiOGE1N2M2YjUxOTEyODE4YzRiNTFk",
    "https://www.reliancedigital.in/medias/Premium-Audio-Accessories-Carousel-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MTMxM3xpbWFnZS9qcGVnfGltYWdlcy9oYjEvaDY1Lzk5Mzc4OTQ3MDMxMzQuanBnfGI5YmRhOGRiM2RlMmMwN2IwZDExZjI1MjE1OTU4ZGVlMTUyZTZlYWUzZWE1Yzg5ZDY5ZjlhZjcxZmY5OWI5YWE",
    "https://www.reliancedigital.in/medias/Samsung-Galaxy-S23-CLP-Banner-18-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w1NTg0NXxpbWFnZS9qcGVnfGltYWdlcy9oYTEvaGNiLzk5NDk5NjIzNzExMDIuanBnfDFmOGM1Y2M1ZDQ1MGM4NWE2ZTAyNjgyZGU5YjY0MWYwY2JiN2E2Nzg4OTJkODY2OTNlOGRmNjk1NzE2MGU0N2Y",
    "https://www.reliancedigital.in/medias/iPhone-13-CLP-Banner-59900-18-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2NDc0OHxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaDA0Lzk5NDkyMzI5ODgxOTAuanBnfGUzZTI4NzExNDI5MzMwOTMzYzc2NGU4OTM4M2FiNzY5YjcxZWIzMzk0ZjA1ZThlMWMyMThjNDg4NWNmYTZjMzM",
    "https://www.reliancedigital.in/medias/Carousel-Banner-Winter-Store-D.jpg?context=bWFzdGVyfGltYWdlc3wxNjM1NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDRjL2hiMS85OTMzMzQ5NjgzMjMwLmpwZ3wyM2ZkYjBmNWRkZmZlMmZlZTRiYWJmZmVlMDg4ZjBjZTE2YzM0ODdkNmM5NDRmNWExNjFjMTk3N2M4NTFjOWRh",
    'https://www.reliancedigital.in/medias/LG-Friday-Carausel-Banner-09-11-202-D.jpg?context=bWFzdGVyfGltYWdlc3w5OTcwM3xpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDhkLzk5MTkxODcyMjI1NTguanBnfDZjYTc5ZjUwZDY3YzZiNjMwODgwOTMyMzBiZDE4OGVhZGEzMDAyNTUyNWNkYjAyYjljNzM2MTU0OTBiZDM1MjU',
    'https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-10-PM-8-AM-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NjgxOXxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaGE3Lzk5NDk2NTc3NTk3NzQuanBnfDJiNzJkNDIzOWU2YWRkY2I2OTM1ZGYzOTk1NzVmYjI1M2JjYTY4MDA0MzhhMmRlODVkYTE1OGIzYjFhYzk1YjA'
  ];

  return (
    <Box
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
        variant='outline'
        colorScheme="red"
        // bg={"transparent"}
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
            height={"300px"}
            width={'100%'}
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