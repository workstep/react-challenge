const initialState = {
	list: [],  
}
 
export function candidateReducer(state = initialState, action) { 
    switch (action.type) { 
        case 'candidates/setCandidates':  
            state.list = action.candidates;
            return state;  
        case 'candidates/updateStep':    
            let id = state.list.findIndex((candidate) => candidate.id == action.id); 
            state.list[id].step = action.step; 
            return state; 
        default: 
            return state
    }
}
