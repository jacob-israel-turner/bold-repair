import React from 'react';
window.React = React;

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className='flex flex-column'>
    		<img src='/assets/images/logo.jpg' id='logo' />
    		<p id='by'>By David Turner</p>
    	</div>
    )
  }
}

React.render(<Main />, document.getElementById('app'));
