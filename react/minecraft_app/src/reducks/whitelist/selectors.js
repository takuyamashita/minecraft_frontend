import {createSelector} from 'reselect';

const whitelistSelector = (state) => state.whitelist;

export const getWhitelist = createSelector(
    [whitelistSelector],
    state => state,
);