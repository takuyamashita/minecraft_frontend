export const SET_SERVERPROPERTIES = 'SET_SERVERPROPERTIES';
export const setServerproperties = (serverproperties) => {
    return {
        type:SET_SERVERPROPERTIES,
        payload:serverproperties
    }
}