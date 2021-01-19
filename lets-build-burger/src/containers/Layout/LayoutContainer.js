import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './LayoutContainer.css';

export default class LayoutContainer extends Component {
  render() {
    return (
      <div>
        LayoutContainer

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/burger">Burger</Link>
            </li>
          </ul>
        </nav>

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
