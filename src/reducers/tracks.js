import * as actionTypes from './../constants/ActionTypes'

const initialState = [
    'Fist song',
    'Second song'
]

export default function tracks(state = initialState, action) {
    if (action.type === actionTypes.ADD_TRACK) {
        console.log('add track', state)
        return [
            ...state,
            action.payload
        ];
    }
    else if (action.type === actionTypes.DELETE_TRACK){
        return [
            ...state
        ]
    }

    return state;
}