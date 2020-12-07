import {createSelector} from 'reselect';

const serverpropertiesSelector = (state) => state.serverproperties;

export const getServerproperties = createSelector(
    [serverpropertiesSelector],
    state => state,
);