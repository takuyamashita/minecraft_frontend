import * as Actions from './actions';
import initialState from '../store/initialState';

export const WhitelistReducer = (state = initialState.whitelist, action) => {
    switch(action.type){
        case Actions.SET_WHITELIST:
            return [...action.payload];
        default:
            return state;
    }
};