function greets(state = [], action) { 
  let i; 
  switch(action.type) {
    case 'ADD_GREET':   
      
      var newState = [];
      state.forEach(greet => { greet.active = false; newState.push(greet); });
      
      return newState.concat(
        {
          name : action.name,
          birthdate : action.birthdate,
          country : action.country,
          active: true
        }
      );
    case 'ACTIVATE_GREET':

      i = action.index;
      
      var newState = [];
      state.forEach((greet, idx) => { greet.active = (idx === i ? true : false) ; newState.push(greet); });      
      
     return newState;      
      
    default:
      return state;
  }
}  

export default greets;
