import React, { Component } from 'react';

import Header from './components/Header';
import Auctions from './components/Auctions';
import Footer from './components/Footer';

import { AUCTION_BID_AWAITING_CONFIRMATION, AUCTION_DEFAULT_STATE } from './constants';

import './App.css';

class App extends Component {
  bid(auctionId) {
    console.log('bid auction ' + auctionId);
  }

  constructor() {
    super();
    this.data = [
      {id: 1, status: AUCTION_BID_AWAITING_CONFIRMATION, title: "Auction #1"},
      {id: 2, status: AUCTION_DEFAULT_STATE, title: "Auction #2", bidder: 'OtherUser'},
    ];

    this.actions = [
      {name: "Bid", handler: this.bid}
    ]
  }

  render() {
    return (
      <div>
        <Header title="Illegal Penny Auctions" routes={[{url: '#', text: 'Home'}]}></Header>
        <Auctions auctions={this.data} actions={this.actions}></Auctions>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
