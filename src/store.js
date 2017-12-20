import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default createStore(
  reducer,
  {
    searched: false,
    sorting: 'price',
    sorting_order: 'asc',
    snap_results: [],
    retails_results: []
  },
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
