import React from 'react'
import Div1 from './HomeComponents/div1'
import Div2 from './HomeComponents/div2'
import Div3 from './HomeComponents/div3'

const Home = () => {
  return (
    <div
    style={{
      backgroundColor: "#e9ebee"
    }}
   >
    {/* <Div1/> */}
    <Div1/>
    <Div2/>
    <Div3/>
    </div>
  )
}

export default Home