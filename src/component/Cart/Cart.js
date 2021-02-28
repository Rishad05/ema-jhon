import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    return (
        <div>
            <h4>Order Summary</h4>
            <h4>Items Ordered:{cart.length}</h4>
        </div>
    );
};

export default Cart;