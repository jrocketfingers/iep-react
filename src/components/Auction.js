import React, { Component } from 'react';

import { AUCTION_BID_AWAITING_CONFIRMATION } from '../constants';

import 'materialize-css/dist/css/materialize.css';

class Auction extends Component {
  render() {
    return(
      <div className="col s12 m6 l3">
        <div className="card">
          <div className="card-image">
            <img src="http://placehold.it/350x350" alt="placeholder"></img>
            <span className="card-title">{this.props.auction.title}</span>
          </div>
          <div className="card-content">
            <span>
            {
              this.props.auction.status === AUCTION_BID_AWAITING_CONFIRMATION ?
              'Bidding...' :
              'Last bidder ' + this.props.auction.bidder 
            }
            </span>
          </div>
          <div className="card-action">
            {this.props.actions.map(function(action) {
              return(<a onClick={action.handler.bind(null, this.props.auction.id)}>{action.name}</a>);
            }.bind(this))}
          </div>
        </div>
      </div>
    );
  }
}

export default Auction;
