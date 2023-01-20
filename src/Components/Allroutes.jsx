import React from 'react';
import {Routes , Route} from "react-router-dom"
import Home from '../Pages/Home';
import Singleproductpage from '../Pages/Singleproductpage';

export const Allroutes = () => {
  return (
    <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path='/products/:id' element={<Singleproductpage/>} />
    </Routes>
  )
}
