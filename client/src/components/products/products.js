import React, {Component} from 'react';

class Products extends Component {
  render() {

    let products = this.props.location.state.furniture.map(product => {
      return (
        <div key={product.id}>
          <img src="http://lorempixel.com/400/400/" />
          <p>{product.manufacture} </p>
          <p> description: {product.product_description}</p>
          <button> ADD TO CART </button>

        </div>
      )
    })

    return (
      <div>
        <h1>{products}</h1>
      </div>
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
