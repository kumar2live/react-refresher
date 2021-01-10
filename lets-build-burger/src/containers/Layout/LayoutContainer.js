import React, { Component } from 'react'
import './LayoutContainer.css';

export default class LayoutContainer extends Component {
  render() {
    return (
      <div>
        LayoutContainer
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
