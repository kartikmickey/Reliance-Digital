
import './App.css';
import Navbar from './Components/Navbar';
import { Allroutes } from './Components/Allroutes';
import Footer from './Components/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <>
  {/* https://creepy-llama.cyclic.app/products */}
     <Navbar/>
   <Box h={{base: "69px", md: "120px"}} bg={"#e4252a"} >

   </Box>
<Allroutes/>
<Footer/>

    </>
    );
}

export default App;
