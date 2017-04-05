import { createStore, applyMiddleware  } from 'redux'
import reducer from './../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware/*, push*/  } from 'react-router-redux'

export const history = createHistory();

export const middleware = routerMiddleware(history);


/* eslint-disable no-underscore-dangle */
//export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(middleware))
    //applyMiddleware(middleware)
);
/* eslint-enable */

