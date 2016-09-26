import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.css';

export default class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">{this.props.title}</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.props.routes.map(function(value) {
                return(<a href="{value.url}">{value.text}</a>);
              })}
            </ul>
          </div>
        </nav>
        <span className="brand-logo"></span>
      </header>
    );
  }
}
