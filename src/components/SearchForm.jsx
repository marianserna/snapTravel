import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { search } from '../actions';

import {
  FormContainer,
  Input,
  Button,
  SearchImg
} from '../elements/searchForm';

class SearchForm extends React.Component {
  static propTypes = { onSearch: PropTypes.func.isRequired };

  render() {
    return (
      <FormContainer>
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
          <Input
            type="text"
            defaultValue="Toronto"
            innerRef={input => (this.city = input)}
            placeholder="Search By City"
          />
          <Input
            type="text"
            defaultValue="2018-01-01"
            innerRef={input => (this.checkin = input)}
            placeholder="Check-In"
          />
          <Input
            type="text"
            defaultValue="2018-01-03"
            innerRef={input => (this.checkout = input)}
            placeholder="Check-Out"
          />

          <Button type="submit">
            <SearchImg src="/images/search.svg" alt="search" />
          </Button>
        </form>
      </FormContainer>
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
