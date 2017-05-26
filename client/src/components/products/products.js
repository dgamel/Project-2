import React, {Component} from 'react';
import Cart from './cart';
import '../../styles/products.css';

import product1 from '../../images/product_1.jpg';
import product2 from '../../images/product_2.jpg';
import product3 from '../../images/product_3.jpg';
import product4 from '../../images/product_4.jpg';
import product5 from '../../images/product_5.jpg';


class Products extends Component {

  constructor() {
    super()

    this.state = {
      products: [],
      selectedItem: {},
      cart: []

    }
  }

  addItemToCart = (item) => {
    let found = this.state.cart.filter( cartItem => cartItem.id === item.id );
    if (found.length > 0) {
      console.log('item already in cart');
    }
    else {
      console.log('adding item to cart:', item);
      let updatedCart = this.state.cart.slice();
      updatedCart.push(item);
      this.setState({
        cart: updatedCart
      });
    }
  }

  removeItemFromCart = (product, event) => {
     let cartCopy = this.state.cart.slice()

     let i = cartCopy.indexOf(product);
     if(i != -1) {
     	cartCopy.splice(i, 1);
     }

    //  cartCopy.splice(cartCopy.indexOf(product),1)
     //
     this.setState({cart: cartCopy})

    // remove this.slice(0);
}


    // clone cart array (from state)
    // FIND product in cloned cart array and remove it from that array
    // update state with refreshed cart array
  // }

  getProducts = () => {
      fetch('/api/products/')
      .then(response => response.json())
      .then(products => {
        console.log(products);
        products.forEach((product, index) =>
          product['image'] = require(`../../images/product_${index + 1}.jpg`))

        this.setState({products})
      })
  }

  componentDidMount = () => {
    this.getProducts()
  }

  updateSelectedItem = (event) => {
    console.log("I'm running!");
  }

  render() {
    let cartItems = this.state.cart.map(item => {
      return (
        <Cart
        key={item.id}
        item={item}
        removeItemFromCart={this.removeItemFromCart}/>
      );
    })

    let products = this.state.products.map((product) => {
      return (
        <div key={product.id}>
          <img src={product.image} />
          <button onClick={ (event) => this.addItemToCart(product)} >
          ADD TO CART</button>
          <p>{product.manufacture} </p>
          <p>{product.product_description}</p>
        </div>
      )
    })

    return (
      <section className="products-container">
        <article className="products">
          <h1>Products</h1>
          {products}
        </article>
        <article className="products-cart">
          <h1>Cart</h1>
          {cartItems}
        </article>
      </section>
    );
  }

}

// const Products = (props) => {
//
//   // componentDidMount = () => props.location.state.getProducts()
//
//   return(
//     <div> Products! </div>
//   )
// }

export default Products;
