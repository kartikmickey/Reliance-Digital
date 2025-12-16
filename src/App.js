import "./App.css";
import Navbar from "./Components/Navbar";
import { Allroutes } from "./Components/Allroutes";
import Footer from "./Components/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      {/* https://electronicsproductdata.onrender.com/products */}
      <Navbar />
      <Box h={{ base: "69px", md: "120px" }} bg={"#c62123"}></Box>
      <Allroutes />
      <Footer />
    </>
  );
}

export default App;
