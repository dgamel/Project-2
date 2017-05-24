import React from 'react';
import {Col} from 'react-bootstrap'
import '../../styles/cart.css';

const Cart = (props) => {

  return (
    <Col xs={12}
      className="cart"
      onClick={(event) => props.toggleCompleted(props.cart, event)}
    >
      <p>{props.product.title}</p>
    </Col>
  )
}

export default Cart
