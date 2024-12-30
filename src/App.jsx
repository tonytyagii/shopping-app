import './App.css'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import { BrowserRouter,Route, Routes} from "react-router";
import ProductDetails from './Components/ProductDetails';
import SearchItems from './Components/SearchItems';
import Cart from './Components/Cart';
import { items } from "./Components/Data"
import { useState } from 'react';


function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([]);


  return (
    <>
    <BrowserRouter>
    <Navbar cart={cart} setData={setData}/>
    <Routes>
      <Route path='/' element={<Product cart= {cart} setCart={setCart} items= {data}/>}/>
      <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart}/>}/>
      <Route path='/search/:term' element={<SearchItems cart={cart} setCart={setCart}/>}/>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
      
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
