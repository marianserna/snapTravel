import React from 'react';
import PropTypes from 'prop-types';

export default class Sorting extends React.Component {
  render() {
    return (
      <section>
        <button>Price</button>
        <button>Rating</button>
        <button>Savings</button>
      </section>
    );
  }
}
