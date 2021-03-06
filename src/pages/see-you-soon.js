import React, { Component } from 'react';
import Link from 'gatsby-link'


class Thanks extends Component {

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <h1>Oh yeah! See you on the Tour de Taco.</h1>
          <p>Expect a reminder email before Friday, July 27th.</p>
          <p>Don't forget to <a href="/#merch">order a special edition Tour de Taco pin</a>.</p>
        </div>
        <div className="row">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    );
  }

}

export default Thanks;
