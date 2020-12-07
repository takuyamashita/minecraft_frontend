import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getServerproperties} from '../reducks/serverproperties/selectors';
import {getServerproperties as getServerpropertiesOperation } from '../reducks/serverproperties/operations';

const Serverproperties = () => {

    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    
    const serverproperties = getServerproperties(selector);

    console.log(serverproperties);

    useEffect(() => {
        if(serverproperties === null) dispatch(getServerpropertiesOperation());
    },[])

    return (
        serverproperties === null ? 
        <React.Fragment>
            <h1>読み込み中</h1>
        </React.Fragment>
        :
        <React.Fragment>
            <h1>プロパティー</h1>
            {serverproperties.map(property => {

            })}
        </React.Fragment>
    );
};
export default Serverproperties;