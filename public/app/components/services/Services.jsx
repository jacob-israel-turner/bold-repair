import React from 'react';

import rebase from 're-base';

var base = rebase.createClass('https://bold-repair.firebaseio.com/');

import Products from './Products.jsx';

class Services extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      services: {
        description: '',
        products: [{
          title: '',
          price: null,
          picture: '',
          description: ''
        }]
      }
    };
  }

  componentWillMount(){
    base.syncState('services', {
      context: this,
      state: 'services'
    });
  }

  render(){
    return (
      <div>
        <div className='container'>
          { this.state.services.description }
        </div>
        <Products products={ this.state.services.products } />
      </div>
    )
  }
}

export default Services;
