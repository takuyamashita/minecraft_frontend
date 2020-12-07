import initialState from '../store/initialState';
import * as Actions from './actions';

export const ServerpropertiesReducer = (state = initialState.serverproperties, action) => {
    switch(action.type){
        case Actions.SET_SERVERPROPERTIES:
            return [...action.payload];
        default:
            return state;
    }
};