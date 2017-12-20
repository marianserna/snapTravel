import React from 'react';
import PropTypes from 'prop-types';

import {
  ActiveFilter,
  InactiveFilter,
  BigLine,
  MediumLine,
  SmallLine,
  Arrow
} from '../elements/sorting';

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
        <ActiveFilter
          onClick={e => {
            e.preventDefault();
            this.props.onChangeSort(
              this.props.value,
              this.props.sorting_order === 'asc' ? 'desc' : 'asc'
            );
          }}
        >
          {this.props.label}
          <div>
            <BigLine />
            <MediumLine />
            <SmallLine />
            {this.props.sorting_order === 'asc' ? (
              <Arrow src="/images/arrow_down.svg" alt="arrow down" />
            ) : (
              <Arrow src="/images/arrow_up.svg" alt="arrow up" />
            )}
          </div>
        </ActiveFilter>
      );
    } else {
      return (
        <InactiveFilter
          onClick={e => {
            e.preventDefault();
            this.props.onChangeSort(this.props.value, 'asc');
          }}
        >
          {this.props.label}
        </InactiveFilter>
      );
    }
  }
}
