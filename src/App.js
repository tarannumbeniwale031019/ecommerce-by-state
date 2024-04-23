import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Cartcom from './Cartcom'
const App = () => {
  let [prod,setProd]=useState([])
  let [data,setData]=useState([])
  let [cart,setCart]=useState([])
  let [ctotal,setCtotal]=useState(0)

  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then((res)=>{
      setData(res.data.products)
      setProd(res.data.products)
    })

  },[])
  let addprod=(item)=>{
    let res=cart.filter((prod,i)=>{
      if(prod.id==item.id)
      {
        incqty(i)
      }
      return prod.id==item.id})
    if(res.length==0)
    {
  setCart([...cart,{...item,"qty":1,"totalamt":item.price}])
  setCtotal((prev)=>prev+item.price) 
  }
  }
  let incqty=(i)=>{
    if(cart[i].qty<5)
    {
    cart[i].qty+=1
    cart[i].totalamt+=cart[i].price
    setCart([...cart])
    setCtotal(prev=>prev+cart[i].price)
    }
  }
  let decqty=(i)=>{
    if(cart[i].qty>1)
    {
    cart[i].qty-=1
    cart[i].totalamt-=cart[i].price
    setCart([...cart])
    setCtotal(prev=>prev-cart[i].price)
    }
    else{
      delprod(i)
    }
  }
  let delprod=(i)=>{
    setCtotal(ctotal-cart[i].totalamt)
    cart.splice(i,1)
    setCart([...cart])

  }
  let serach=(str)=>{
    let regexp=new RegExp(str,"i")
   setData(prod.filter((item)=>regexp.test(item.title)))

  }
  return (<BrowserRouter>
  <Nav ct={cart.length}/>
  <Routes>
    <Route path='/' element={<Home data={data} addprod={addprod} search={serach}/>}/>
    <Route path="/cart" element={<Cartcom cart={cart} incqty={incqty} decqty={decqty} delprod={delprod} ctotal={ctotal}/>}/>
  </Routes>
  </BrowserRouter>
   
  )
}
export default App