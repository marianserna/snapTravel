import styled from 'styled-components';
import { colors, padding, margin, fontSizes } from './variables';

const HotelInfo = styled.section`
  margin-top: ${margin.section};
  padding: ${padding.section};
  display: flex;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.18);
`;

const Details = styled.div`
  width: 50%;
  display: flex;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const DetailsImg = styled.img`
  width: 184.9px;
`;

const Banner = styled.div`
  background-image: url('/images/discount-banner.svg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 99px;
  height: 64px;
  border-radius: 2px;
  position: absolute;
  top: 11px;
  left: -7px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Savings = styled.p`
  font-size: ${fontSizes.savings};
  font-weigth: bold;
  color: ${colors.savings};
  text-align: center;
  margin: 0 auto;
`;

const Off = styled(Savings)`
  font-size: ${fontSizes.off};
  line-height: 25px;
`;

const HotelFacts = styled.div`
  margin-left: ${margin.hotelFacts};
  color: ${colors.hotelInfo};
`;

const HotelName = styled.h2`
  width: 100%;
  padding-top: 4px;
  font-size: ${fontSizes.h2};
  font-weight: 600;
  line-height: 22px;
  padding-bottom: ${padding.hotelInfo};
`;

const HotelAddress = styled.h3`
  width: 100%;
  font-size: ${fontSizes.h3};
  padding-bottom: ${padding.hotelInfo};
`;

const SplitFacts = styled.div`
  display: flex;
`;

const NumReviews = styled.p``;

const Amenities = styled.p`
  margin-top: ${margin.amenities};
  margin-bottom: ${margin.amenities};
`;

const Prices = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

const Price = styled.div`
  border-radius: 5px;
  width: calc(50% - 16px);
  margin-right: 16px;
  position: relative;
  height: 177px;
  font-size: ${fontSizes.price};
`;

const HotelsPrice = styled(Price)`
  color: ${colors.hotels};
  border: 1px solid ${colors.hotels};
`;

const PriceTag = styled.p`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 38px;
`;

const SnapPrice = styled(Price)`
  color: ${colors.snapBorder};
  border: 1px solid ${colors.snapBorder};
`;

const HotelsImage = styled.img`
  width: 110px;
  position: absolute;
  top: 118px;
  left: 50%;
  transform: translateX(-50%);
`;

const StarContainer = styled.div`
  width: 50%;
`;

const AmenitiesContainer = styled.div`
  width: 50%;
`;

const Star = styled.img`
  width: 18px;
  height: 16px;
  margin-top: ${margin.star};
  margin-bottom: ${margin.star};
  transform: scale(1.4, 1.4);
`;

const ViewDetails = styled.a`
  width: 65%;
  padding: 11px 22px;
  border-radius: 4px;
  background-color: ${colors.buttonBg};
  color: ${colors.savings};
  text-decoration: none;
  font-weight: 500;
  font-size: ${fontSizes.viewDetails};
  box-shadow: 0 2px 4px 0 rgba(79, 159, 34, 0.5);
  position: absolute;
  top: 103px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export {
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
};
