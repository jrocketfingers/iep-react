import React, { Component } from 'react';
import $ from 'jquery';

import Header from './components/Header';
import Auctions from './components/Auctions';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.serverRequest = $.get(this.props.source, function(result) {
      this.setState({
        auctions: result
      });
    }.bind(this), "json");
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  bid(auctionId) {
    console.log('bid auction ' + auctionId);
  }

  constructor() {
    super();

    this.state = { auctions: [] };

    this.actions = [
      {name: "Bid", handler: this.bid}
    ];
  }

  render() {
    return (
      <div>
        <Header title="Illegal Penny Auctions" routes={[{url: '#', text: 'Home'}]}></Header>
        <Auctions auctions={this.state.auctions} actions={this.actions}></Auctions>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
