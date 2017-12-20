export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        searched: true,
        snap_results: action.snap_results,
        retail_results: action.retail_results
      };
    case 'CHANGE_SORT':
      return {
        ...state,
        sorting: action.sorting,
        sorting_order: action.sorting_order
      };
    default:
      return state;
  }
}
