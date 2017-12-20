import React from 'react';
import PropTypes from 'prop-types';

export default class SortingButton extends React.Component {
  static propTypes = {
    sorting: PropTypes.string.isRequired,
    sorting_order: PropTypes.string.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  };

  render() {
    if (this.props.sorting === this.props.value) {
      return (
        <button
          onClick={e => {
            e.preventDefault();
            this.props.onChangeSort(
              this.props.value,
              this.props.sorting_order === 'asc' ? 'desc' : 'asc'
            );
          }}
        >
          {this.props.label}
        </button>
      );
    } else {
      return (
        <button
          onClick={e => {
            e.preventDefault();
            this.props.onChangeSort(this.props.value, 'asc');
          }}
        >
          {this.props.label}
        </button>
      );
    }
  }
}
