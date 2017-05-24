import React, {Component} from 'react';
import '../../styles/products.css';

class Products extends Component {

  constructor() {
    super()

    this.state = {
      products: [],
      selectedItem: {},
      cart: []
      // ,productsID: props.match.params.id
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

  getProducts = () => {
      fetch('/api/products/')
      .then(response => response.json())
      .then(products => {
        console.log(products);
        this.setState({products})
      })
  }

  componentDidMount = () => {
    this.getProducts()
  }

  updateSelectedItem = (event) => {
    console.log("I'm running!");
    // get the ID of product
    // clone products array (slice :))
    // find the product in products array
    // add that product to selectedItem
  }

  render() {
    let cartItems = this.state.cart.map(item => {
      return (
        <p key={item.id}>Item: {item.manufacture}</p>
      );
    })

    let products = this.state.products.map(product => {
      return (
        <div key={product.id}>
          <img src="http://lorempixel.com/400/400/" />
          // <img src={product.imageUrl} />
          <p>{product.manufacture} </p>
          <p> description: {product.product_description}</p>
          <button onClick={ (event) => this.addItemToCart(product)} >
          ADD TO CART</button>

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
