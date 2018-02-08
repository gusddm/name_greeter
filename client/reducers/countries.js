export default function countries(state = [], action) {
  switch (action.type) {
      case 'COUNTRIES_FETCH_DATA_SUCCESS':
          return action.countries;
      default:
          return state;
  }
}