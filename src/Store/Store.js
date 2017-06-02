import {createLogger} from 'redux-logger'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import animes from '../Reducers/AnimeReducer'

const Middleware = applyMiddleware( createLogger(), thunk)

const store = createStore(combineReducers({animes}),{},compose(Middleware,window.devToolsExtension ? window.devToolsExtension() : f => f));

  export default store




