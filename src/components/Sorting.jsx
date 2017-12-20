import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeSort } from '../actions';
import SortingButton from './SortingButton';

import { SortingButtons } from '../elements/sorting';

class Sorting extends React.Component {
  static propTypes = {
    sorting: PropTypes.string.isRequired,
    sorting_order: PropTypes.string.isRequired,
    onChangeSort: PropTypes.func.isRequired
  };

  render() {
    return (
      <SortingButtons>
        <SortingButton value="price" label="Price" {...this.props} />
        <SortingButton value="rating" label="Rating" {...this.props} />
        <SortingButton value="savings" label="Savings" {...this.props} />
      </SortingButtons>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { sorting: state.sorting, sorting_order: state.sorting_order };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeSort: (sorting, sorting_order) => {
      dispatch(changeSort(sorting, sorting_order));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
