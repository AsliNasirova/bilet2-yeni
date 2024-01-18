import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/MainLayout/main'
import Home from './Pages/Home/home'
import Add from './Pages/Add/add'
import Wishlist from './Pages/Wishlist/wishlist'
import Basket from './Pages/Basket/basket'
import Detail from './Pages/Detail/detail'
import Search from './Pages/Search/search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/basket' element={<Basket/>}></Route>
        <Route path='/:id' element={<Detail/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Route>
    </Routes>
      
    </>
  )
}

export default App
