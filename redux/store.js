import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import nasaReducer from './reducer/nasa_reducer';

const store = createStore(combineReducers({
    nasaData: nasaReducer,
}), applyMiddleware(thunk));

export default store;