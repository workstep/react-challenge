const initialState = {
  list: [
      'All',
      'Paperwork',
      'Background Check',
      'Drug Test',
  ],
  filter: 'All'
} 
 
export function stepsReducer(state = initialState, action) { 
  switch (action.type) { 
    case 'steps/setSteps':  
        state.list = action.steps;
        return state; 
    case 'steps/setStepFilter':   
        state.filter = action.filter;
        return state; 
    default: 
      return state
  }
}
