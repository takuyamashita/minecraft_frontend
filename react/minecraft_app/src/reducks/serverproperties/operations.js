import Api from '../../Api';
import {setServerproperties} from './actions';

export const getServerproperties = () => {
    return (dispatch, getState) => {
        Api.get('/serverproperties').then(response => {
            const data = response.data.split(/\r*\n/);
            const properties = [];
            data.forEach(line => {
                if(line.includes("=")){
                    
                }
            });
            dispatch(setServerproperties(properties));
            console.log(data);
            console.log(getState());
        })
        .catch(error => {

        });
    }
};