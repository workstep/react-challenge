import { combineReducers } from 'redux';  
import { candidateReducer } from "../features/candidates/reducers/candidateReducer.js";
import { stepsReducer } from "../features/candidates/reducers/stepsReducer.js";

export default combineReducers({
    candidates: candidateReducer,
    steps: stepsReducer,
})
