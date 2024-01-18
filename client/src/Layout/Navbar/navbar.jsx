import React, { useState } from 'react'
import { NavLink, useActionData } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <nav>
    <div className='navText'> 
    <h1>Pulse.</h1>
    </div>
      <ul>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/add"}>Add</NavLink></li>
        <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
        <li><NavLink to={"/basket"}>Basket</NavLink></li>
        <li><NavLink to={"/:id"}>Detail</NavLink></li>
        <li><NavLink to={"/search"}>Search</NavLink></li>
      </ul>

      <div id='mobile' onClick={handleClick}>
        {
          isOpen ? <IoMdClose /> : <CiMenuBurger />
        }
      </div>
   
    </nav>
   
    </>
  )
}

export default Navbar

