import axios from 'axios';

const search = (city, checkin, checkout) => {
  return dispatch => {
    const snap_promise = axios.post(
      'https://experimentation.getsnaptravel.com/interview/hotels',
      {
        city: city,
        checkin: checkin,
        checkout: checkout,
        provider: 'snaptravel'
      }
    );

    const retail_promise = axios.post(
      'https://experimentation.getsnaptravel.com/interview/hotels',
      {
        city: city,
        checkin: checkin,
        checkout: checkout,
        provider: 'retail'
      }
    );

    Promise.all([snap_promise, retail_promise]).then(responses => {
      dispatch({
        type: 'SEARCH',
        snap_results: responses[0].data.hotels,
        retail_results: responses[1].data.hotels
      });
    });
  };
};

export { search };
