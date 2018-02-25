import React from 'react';
import {Link} from 'react-router-dom'

//write module
//nav html being rendered
class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
