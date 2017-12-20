// Building results object (contains data from both sources)
const mergeHotels = (snap_hotels, retail_hotels) => {
  // source 1
  let results = snap_hotels.reduce((results, hotel) => {
    results[hotel.id] = {
      id: hotel.id,
      snap_info: hotel
    };
    return results;
  }, {});

  // source 2
  results = retail_hotels.reduce((results, hotel) => {
    if (results[hotel.id]) {
      results[hotel.id] = { ...results[hotel.id], retail_info: hotel };
    }
    return results;
  }, results);

  // filtering hotels found in both sources
  return Object.values(results).filter(
    result => result.snap_info && result.retail_info
  );
};

// Handle sorting
const sortHotels = (hotels, sorting, sorting_order) => {
  const sortCallbacks = {
    price: (hotelA, hotelB) => {
      if (hotelA.snap_info.price < hotelB.snap_info.price) {
        return -1;
      }
      if (hotelA.snap_info.price > hotelB.snap_info.price) {
        return 1;
      }
      return 0;
    },
    rating: (hotelA, hotelB) => {
      if (hotelA.snap_info.rating < hotelB.snap_info.rating) {
        return -1;
      }
      if (hotelA.snap_info.rating > hotelB.snap_info.rating) {
        return 1;
      }
      return 0;
    },
    savings: (hotelA, hotelB) => {
      const diffA = hotelA.retail_info.price - hotelA.snap_info.price;
      const diffB = hotelB.retail_info.rating - hotelB.snap_info.rating;

      if (diffA < diffB) {
        return -1;
      }
      if (diffA > diffB) {
        return 1;
      }
      return 0;
    }
  };

  const sortedHotels = hotels.sort(sortCallbacks[sorting]);
  if (sorting_order === 'asc') {
    return sortedHotels;
  } else {
    return sortedHotels.reverse();
  }
};

export { mergeHotels, sortHotels };
