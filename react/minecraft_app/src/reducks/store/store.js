import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router';

import {WhitelistReducer} from '../whitelist/reducers';
import {ServerpropertiesReducer} from '../serverproperties/reducers'; 

export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            whitelist: WhitelistReducer,
            serverproperties: ServerpropertiesReducer,
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
    );
};

