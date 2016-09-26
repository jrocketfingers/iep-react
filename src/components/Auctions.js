import React, { Component } from 'react';

import Auction from './Auction';

export default class Auctions extends Component {
  render() {
    return(
      <div className="row">
        {this.props.auctions.map(function(value) {
          return(<Auction key={value.id} auction={value} actions={this.props.actions} />);
        }.bind(this))}
      </div>
    );
  }
}
