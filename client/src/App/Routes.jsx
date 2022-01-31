import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Avatar from '../shared/component/Avatar/Avatar';

  // import history , project , authenticate and pageError component

const Routes = () =>{
    <Switch>
        <Link to = '/'>Home</Link>
        <Route path = "/">
            <Avatar/>
        </Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
    </Switch>
}
export default Routes;