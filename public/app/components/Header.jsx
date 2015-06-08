import React from 'react';
import { Link } from 'react-router';

var styles = {
  header: {
    height: '40px',
    backgroundColor: '#34495E',
    width: '100%',
    padding: '0px 40px',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0
  }
}


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <header className='flex flex-space-between' style={ styles.header }>
        <div>Bold Repair</div>
        <div className='links flex flex-space-between' style={ styles.links }>
          <a><Link to='about'>About</Link></a>
          <a><Link to='services'>Services</Link></a>
        </div>
      </header>
    )
  }
}

export default Header;
