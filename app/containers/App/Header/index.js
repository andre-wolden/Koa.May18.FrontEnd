import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/products"> Products</Link>
      </div>
    );
  }
}

export default Header;
