import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './component/header.js';
import Footer from './component/footer.js';
import Navbar from './component/navbar.js';
import Home from './component/home.js';
import About from './component/about.js';
import Sidebar from './component/sidebar'
// import Portfolio from '/component/portfolio/deck.js';

class App extends React.Component{
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
    return(
      <div>

        <Header />
        <Navbar />
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />

        </main>
        <Footer />
      </div>
    )
  }
}
const root = document.getElementById('root');
ReactDom.render(<BrowserRouter><App /></BrowserRouter>, root)
