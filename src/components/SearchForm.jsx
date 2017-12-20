import React from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends React.Component {
  render() {
    return (
      <section>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            ref={input => (this.city = input)}
            placeholder="Search By City"
          />
          <input
            type="text"
            ref={input => (this.checkin = input)}
            placeholder="Check-In"
          />
          <input
            type="text"
            ref={input => (this.checkout = input)}
            placeholder="Check-Out"
          />

          <button type="submit">
            <img src="/images/search.svg" alt="search" />
          </button>
        </form>
      </section>
    );
  }
}
