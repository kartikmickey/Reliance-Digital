import React from 'react';
import {Routes , Route} from "react-router-dom"
import Allproducts from '../Pages/Allproducts';
import Home from '../Pages/Home';
import Notfound from '../Pages/Notfound';
import Singleproductpage from '../Pages/Singleproductpage';

export const Allroutes = () => {
  return (
    <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path='/products/:id' element={<Singleproductpage/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path='/products' element={<Allproducts/>} />
    </Routes>
  )
}
