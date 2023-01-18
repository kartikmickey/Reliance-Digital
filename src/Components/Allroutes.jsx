import React from 'react';
import {Routes , Route} from "react-router-dom"
import Home from '../Pages/Home';

export const Allroutes = () => {
  return (
    <Routes>
        <Route path = "/" element={<Home/>} />
    </Routes>
  )
}
