import React from 'react';

import Product from './Product';

class Products extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){

  }

  render(){
    var products = this.props.products.map((item, index) => {
      return <Product product={ item} key={ index } />;
    });
    console.log(products);
    return (
      <div className='container'>
        { products }
      </div>
    )
  }

}

export default Products;
