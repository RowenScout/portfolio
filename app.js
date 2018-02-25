import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';

import Header from './component/header.js';
// import Footer from '/component/footer';
// import Nav from '/component/nav';
// import Home from '/component/home';
// import About from '/component/about';
// import Footer from '/component/footer';
// import Portfolio from '/component/portfolio/deck.js';
// import Sidebar from './component/sidebar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //fill in later
    };
  }

  componentDidMount(){
    console.log('__STATE__', this.state);
  }

  render(){
    console.log('testing');
    return(
      <div>
        <Header/>
      </div>
    )
  }
}
const root = document.getElementById('root');
ReactDom.render(<App/>, root)
