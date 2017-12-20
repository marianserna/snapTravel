import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mergeHotels, sortHotels } from '../utils';
import Hotel from './Hotel';

class SearchResults extends React.Component {
  static propTypes = {
    hotels: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        snap_info: PropTypes.shape({
          id: PropTypes.number,
          hotel_name: PropTypes.string,
          num_reviews: PropTypes.number,
          address: PropTypes.string,
          num_stars: PropTypes.number,
          amenities: PropTypes.arrayOf(PropTypes.string),
          image_url: PropTypes.string,
          price: PropTypes.number
        }),
        retail_info: PropTypes.shape({
          price: PropTypes.number
        })
      })
    ).isRequired
  };

  render() {
    return (
      <section>
        {this.props.hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel} />)}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotels: sortHotels(
      mergeHotels(state.snap_results, state.retail_results),
      state.sorting,
      state.sorting_order
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(SearchResults);
