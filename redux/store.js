import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import nasaReducer from './reducer/nasa_reducer';
import planetReducer from './reducer/planet_reducer';
import moonReducer from './reducer/moon_reducer';
import dwarfplanetReducer from './reducer/dwarfplanet_reducer';

const store = createStore(combineReducers({
    nasaData: nasaReducer,
    planetData: planetReducer,
    moonData: moonReducer,
    dwarfplanetData: dwarfplanetReducer,
}), applyMiddleware(thunk));

export default store;