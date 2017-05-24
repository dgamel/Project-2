import React from 'react';
import {Col} from 'react-bootstrap'
import '../../styles/cart.css';

const Cart = (props) => {

  return (
    <Col xs={6}
      className="cart"

    >
      <p><span className="product_description"> {props.item.product_description}</span> by {props.item.manufacture} ${props.item.retail_cost}</p>

      <button onClick={(event) => props.removeItemFromCart(props.item, event)}> REMOVE ITEM FROM CART</button>

    </Col>
  )
}

export default Cart
