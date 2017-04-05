import * as actionTypes from './../constants/ActionTypes'

export const onAddTrack = trackName => ({
        type: actionTypes.ADD_TRACK,
        payload: trackName
})

export const onAddPlaylist = playlist => ({
        type: actionTypes.ADD_PLAYLIST,
        payload: playlist
})

export const onChangeVisible = isVisible => ({
        type: actionTypes.CHANGE_VISIBBLE,
        payload: isVisible
})

export const onMouseMove = coords => ({
        type: 'MOUSE_MOVE',
        payload: coords
})

export const onToggleMenu = open => ({
        type: 'TOGGLE_MENU_OPEN',
        payload: open
})