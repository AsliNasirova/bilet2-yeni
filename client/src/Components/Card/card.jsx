import React from 'react';
import "./card.scss";

const Card = ({title,description,price,id}) => {
    
  return (
    <>
    
      <div className="cardArea">
        <div className="cardBox">

            <div className="cardText">
                
                <div><h2>{title}</h2></div>
                <div className="text_card">
                <h6>{description}</h6>
                <p ></p>
                <div className="iconPrice">
              
                <p> ${price}</p>
                </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
