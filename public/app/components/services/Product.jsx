import react from 'react';


var styles = {
  picture: {
    width: 'auto',
    height: '200px',
    display: 'block'
  },
  container: {
    width: 'calc(100% + 3rem)'
  }
};

class Product extends react.Component {

  constructor(props){
    super(props);
  }

  render(){
    var product = this.props.product;
    return (
      <div className='container' style={ styles.container }>
        <h3>{ product.title }</h3>
        <p>{ product.price }</p>
        <div className='flex flex-space-between'>
          <img src={ product.picture } style={ styles.picture } />
          <p>{ product.description }</p>
        </div>
      </div>
    )
  } 
}

export default Product;
