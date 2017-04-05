import * as actionTypes from './../constants/ActionTypes'

const initialState = [
        '2015 playlist',
        '2016 playlist'
    ]

export default function playlists(state = initialState, action) {
    if (action.type === actionTypes.ADD_PLAYLIST) {
        return Object.assign({}, state, action.payload)
    }
    else if (action.type === actionTypes.DELETE_PLAYLIST){
        return state;
    }

    return state;
}