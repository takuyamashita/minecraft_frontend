import React from 'react';
import {Route, Switch} from 'react-router';

import {Whitelist, Serverproperties} from './templates';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/whitelist" component={Whitelist}/>
            <Route exact path="/properties" component={Serverproperties}/>
        </Switch>
    );
};
export default Router;