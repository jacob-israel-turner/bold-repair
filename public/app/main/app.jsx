/*
 * Modules
 */
import React from 'react';
import Router from 'react-router';

var RouteHandler = Router.RouteHandler;


/*
 * Components
 */
import { Header } from './components.jsx';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount(){
  }

  render(){

    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    )
  }
}

export default App;
