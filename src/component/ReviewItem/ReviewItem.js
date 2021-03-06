import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    console.log(props)
    const {name,quantity}=props.product
    return (
        <div className="review-item">
           <h2 className="product-name">{name}</h2> 
           <p>Quantity:{quantity}</p>
           <br/>
           <button className="main-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;