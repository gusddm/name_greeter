export function countriesFetchDataSuccess(countries) {
    return {
        type: 'COUNTRIES_FETCH_DATA_SUCCESS',
        countries
    };
}

export function itemsHasErrored(bool) {
    return {
        type: 'COUNTRIES_FETCH_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'COUNTRIES_FETCH_IS_LOADING',
        isLoading: bool
    };
}

export function countriesFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));        
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((countries) => dispatch(countriesFetchDataSuccess(countries)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function addGreet(name, country, birthdate) {
    return {
      type: 'ADD_GREET',
      name,
      country,
      birthdate      
    };
  }

export function activateGreet(i) {
    return {
        type: 'ACTIVATE_GREET',
        index: i
    }
}
  