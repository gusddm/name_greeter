export default function countries(state = [], action) {
  switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          return action.countries;
      default:
          return state;
  }
}