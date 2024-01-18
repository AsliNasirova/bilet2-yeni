import React from 'react'
import { Helmet } from 'react-helmet-async'
import Product from '../../Components/Product/product'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
      <div>
        <Product/>
      </div>
    </>
  )
}

export default Home
