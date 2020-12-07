import Api from '../../Api';
import {setWhitelist} from './actions';

export const getWhitelist = () => {
    return (dispatch, getState) => {
        Api.get('/whitelist').then(response => {
            dispatch(setWhitelist(response.data));
        })
        .catch(error => {

        });
    }
};