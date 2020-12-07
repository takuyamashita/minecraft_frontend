export const SET_WHITELIST = 'SET_WHITELIST';
export const setWhitelist = (whitelist) => {
    return {
        type:SET_WHITELIST,
        payload:whitelist,
    };
};