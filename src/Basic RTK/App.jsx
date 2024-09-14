import React from 'react'
import {Routes,Route} from "react-router-dom"
import Products from './products'
import Navbar from './navbar'
import Cart from './cart'

function App() {
  return (
    <>
    <Navbar/>
    <br/><br/><br/><br/>
   <Routes>
    <Route path='/' element={<Products/>} />
    <Route path='/cart' element={<Cart/>} />
   </Routes>
  </>
  )
}

export default App