import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { search } from '../actions';

class SearchForm extends React.Component {
  static propTypes = { onSearch: PropTypes.func.isRequired };

  render() {
    return (
      <section>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onSearch(
              this.city.value,
              this.checkin.value,
              this.checkout.value
            );
          }}
        >
          <input
            type="text"
            defaultValue="Toronto"
            ref={input => (this.city = input)}
            placeholder="Search By City"
          />
          <input
            type="text"
            defaultValue="2018-01-01"
            ref={input => (this.checkin = input)}
            placeholder="Check-In"
          />
          <input
            type="text"
            defaultValue="2018-01-03"
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (city, checkin, checkout) => {
      dispatch(search(city, checkin, checkout));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
