import React from 'react';
import PropTypes from 'prop-types';

import {
  HotelInfo,
  Details,
  ImageContainer,
  DetailsImg,
  Banner,
  Savings,
  Off,
  HotelFacts,
  HotelName,
  HotelAddress,
  NumReviews,
  Amenities,
  Prices,
  HotelsPrice,
  PriceTag,
  SnapPrice,
  HotelsImage,
  SplitFacts,
  StarContainer,
  AmenitiesContainer,
  Star,
  ViewDetails
} from '../elements/hotel';

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
    const savings = parseInt(this.props.hotel.retail_info.price - hotel.price);
    const stars = [];
    for (let i = 0; i < hotel.num_stars; i++) {
      stars.push(i);
    }

    return (
      <HotelInfo>
        <Details>
          <ImageContainer>
            <DetailsImg src={hotel.image_url} alt={hotel.hotel_name} />
            {savings > 0 ? (
              <Banner>
                <Savings>${savings}</Savings>
                <Off>OFF</Off>
              </Banner>
            ) : (
              ''
            )}
          </ImageContainer>

          <HotelFacts>
            <HotelName>{hotel.hotel_name}</HotelName>
            <HotelAddress>{hotel.address}</HotelAddress>

            <SplitFacts>
              <StarContainer>
                {stars.map(star => (
                  <Star src="/images/star.svg" key={star} alt="star" />
                ))}

                <p>{hotel.num_reviews} Reviews</p>
              </StarContainer>

              <AmenitiesContainer>
                {hotel.amenities.map(amenity => (
                  <Amenities key={amenity}>{amenity}</Amenities>
                ))}
              </AmenitiesContainer>
            </SplitFacts>
          </HotelFacts>
        </Details>

        <Prices>
          <HotelsPrice>
            <PriceTag>
              USD${parseInt(this.props.hotel.retail_info.price)}
            </PriceTag>
            <HotelsImage
              src="/images/hotels-com-logo.png"
              alt="hotels.com logo"
            />
          </HotelsPrice>

          <SnapPrice>
            <PriceTag>USD${parseInt(hotel.price)}</PriceTag>
            <ViewDetails href="https://www.getsnaptravel.com/">
              View Details
            </ViewDetails>
          </SnapPrice>
        </Prices>
      </HotelInfo>
    );
  }
}
