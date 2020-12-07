import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getWhitelist} from '../reducks/whitelist/selectors';
import {getWhitelist as getWhitelistOperation} from '../reducks/whitelist/operations';

const Whitelist = () => {

    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    
    const whitelist = getWhitelist(selector);

    console.log(whitelist);

    useEffect(() => {
        if(whitelist === null) dispatch(getWhitelistOperation());
    },[])

    return (
        whitelist === null ? 
        <React.Fragment>
            <h1>読み込み中</h1>
        </React.Fragment>
        :
        <React.Fragment>
            <h1>ホワイトリスト</h1>
            {whitelist.map(property => {

            })}
        </React.Fragment>
    );
};
export default Whitelist;