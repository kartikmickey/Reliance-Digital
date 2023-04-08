import React from 'react';
import {Routes , Route} from "react-router-dom"
import Allproducts from '../Pages/Allproducts';
import Home from '../Pages/Home';
import Mobile from '../Pages/Mobile';
import Notfound from '../Pages/Notfound';
import Singleproductpage from '../Pages/Singleproductpage';
import TV from '../Pages/Television';
import HomeAppliances from '../Pages/HomeAppliances';
import Audio from '../Pages/Audio';
import Cart from '../Pages/Cart';
import Login from '../Pages/Login';
import SignUp from '../Pages/signUp';

export const Allroutes = () => {
  return (
    <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path='/products/:id' element={<Singleproductpage/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path='/products' element={<Allproducts/>} />
        <Route path='/mobile' element={<Mobile/>} />
        <Route path='/televisions' element={<TV/>} />
        <Route path='/homeappliances' element={<HomeAppliances/>} />
        <Route path='/audio' element={<Audio/>} />
        <Route path='/cart/:id' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
    </Routes>
  )
}
