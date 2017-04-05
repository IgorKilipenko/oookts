import * as actionTypes from './../constants/ActionTypes'

const initialState = {isVisible: true};

export default function visible(state = initialState, action) {
    if (action.type === actionTypes.CHANGE_VISIBBLE) {
        console.log('is visible', state)
       return Object.assign({}, state, {isVisible: action.payload})
    }
    
    return state;
}