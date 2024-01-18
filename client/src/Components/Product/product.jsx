import React, { useEffect, useState } from 'react'
import Card from '../Card/card'
import { FaHamburger } from "react-icons/fa";
import './product.scss'

const Product = () => {
  const [product, setProduct] = useState()
  async function getProducts() {
    const data = await fetch("http://localhost:4000/eggs")
    const res = await data.json()
    console.log(res);
    setProduct(res)
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <section id='product'>
        <div className="productArea">
          <div className="ourMenu">
          <FaHamburger />
          <h2>Our Menu</h2>
          </div>
          <div className="titleTextCard">

            <ul className='switch_card'>
              <li>Breakfast</li>
              <li>Brunch</li>
              <li>Lunch</li>
              <li>Dinner</li>
            </ul>
          </div>
          <div className="productCard">
            {product && product.map((item) => (
              <div className="card">
                <Card key={item._id} id={item._id} title={item.title} description={item.description} />
              </div>
            ))}
          </div>
          <button className='see'>See More</button>

        </div>
      </section>

    </>
  )
}

export default Product
