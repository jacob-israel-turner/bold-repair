import React from 'react';
import rebase from 're-base';

var base = rebase.createClass('https://bold-repair.firebaseio.com/');


var styles = {
  picture: {
    maxHeight: '400px',
    width: 'auto',
    display: 'block'
  },
  bio: {
    flexGrow: 2,
    marginLeft: '50px'
  }
}


class About extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      dave: {
        picture: null,
        bio: null
      }
    };
  }

  componentWillMount(){
    base.syncState('dave', {
      context: this,
      state: 'dave'
    });
  }

  componentWillUnmount(){
    base.removeBinding('dave');
  }

  render(){

    return (
      <div>
        <div className='container'>
          <div className='flex flex-space-between'>
            <img style={ styles.picture } src={ this.state.dave.picture } />
            <p style={ styles.bio }>{ this.state.dave.bio }</p>
          </div>
        </div>
      </div>
    )
  }

}

export default About;
