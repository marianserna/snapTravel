import React from 'react';
import PropTypes from 'prop-types';

export default class Hotel extends React.Component {
  static propTypes = {
    hotel: PropTypes.shape({
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
    }).isRequired
  };

  render() {
    const hotel = this.props.hotel.snap_info;
    const stars = [];
    for (let i = 0; i < hotel.num_stars; i++) {
      stars.push(i);
    }

    return (
      <div>
        <section className="hotelInfo">
          <div>
            <img src={hotel.image_url} alt={hotel.hotel_name} />
            <div style={{ backgroundImage: '/images/discount-banner.svg' }}>
              ${this.props.hotel.retail_info.price - hotel.price}
              <br />
              OFF
            </div>
          </div>

          <div>
            <h2>{hotel.hotel_name}</h2>
            <h3>{hotel.address}</h3>

            <div className="ratings">
              {stars.map(star => (
                <img src="/images/star.svg" key={star} alt="star" />
              ))}
            </div>
          </div>

          <div>
            {hotel.amenities.map(amenity => <p key={amenity}>{amenity}</p>)}
          </div>
        </section>

        <section className="priceComparison">
          <div>
            <p className="hotelsPrice">
              USD${this.props.hotel.retail_info.price}
            </p>
            <img src="/images/hotels-com-logo.png" alt="hotels.com logo" />
          </div>

          <div>
            <p className="snapPrice">USD${hotel.price}</p>
            <a href="https://www.getsnaptravel.com/">View Details</a>
          </div>
        </section>
      </div>
    );
  }
}
