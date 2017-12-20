import { mergeHotels } from './utils';

const snap_hotels = [
  {
    id: 4,
    hotel_name: 'The Cosmopolitan Multinationtional Hotel',
    num_reviews: 1955,
    address: '141 West 65th Street, Very Large City',
    num_stars: 4,
    amenities: ['Wi-Fi', 'Parking', 'Pool'],
    image_url:
      'https://images.trvl-media.com/hotels/2000000/1860000/1857300/1857289/011c64fe_z.jpg',
    price: 77.02
  },
  {
    id: 22,
    hotel_name: 'The Grand Budapest Hotel',
    num_reviews: 1372,
    address: '231 Boylston St, Very Large City',
    num_stars: 5,
    amenities: ['Parking', 'Pool'],
    image_url:
      'https://images.trvl-media.com/hotels/1000000/910000/904900/904821/904821_178_b.jpg',
    price: 186.99
  }
];

const retail_hotels = [
  {
    id: 87,
    hotel_name: 'The Seven Seasons Hotel',
    num_reviews: 338,
    address: '12 Main Street, Very Large City',
    num_stars: 5,
    amenities: ['Wi-Fi', 'Pool', 'Breakfast'],
    image_url:
      'https://images.trvl-media.com/hotels/1000000/50000/41300/41245/8640cd6f_b.jpg',
    price: 101
  },
  {
    id: 4,
    hotel_name: 'The Cosmopolitan Multinationtional Hotel',
    num_reviews: 1955,
    address: '141 West 65th Street, Very Large City',
    num_stars: 4,
    amenities: ['Wi-Fi', 'Parking', 'Pool'],
    image_url:
      'https://images.trvl-media.com/hotels/2000000/1860000/1857300/1857289/011c64fe_z.jpg',
    price: 77.02
  }
];

it('merges hotels from different sources', () => {
  const results = mergeHotels(snap_hotels, retail_hotels);

  expect(results.length).toBe(1);
  expect(results[0].id).toBe(4);
});
