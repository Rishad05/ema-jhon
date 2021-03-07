import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name,quantity,key,price}=props.product
    return (
        <div className="review-item">
           <h2 className="product-name">{name}</h2> 
           <p>Quantity:{quantity}</p>
           <p><small>$ {price}</small></p>
           <br/>
           <button className="main-btn" 
           onClick={() => props.removeProduct(key)}
           >Remove</button>
        </div>
    );
};

export default ReviewItem;