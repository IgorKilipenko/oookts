import { combineReducers } from 'redux'
import tracks from './tracks'
import playlists from './playlists'
import visible from './visible'

import mouseMove from './mouseMove'
import toggleMenu from './toggleMenu'

import { routerReducer } from 'react-router-redux'

export default combineReducers ({
    tracks,
    playlists,
    visible,
    router: routerReducer,
    
    mouseMove,
    toggleMenu
})