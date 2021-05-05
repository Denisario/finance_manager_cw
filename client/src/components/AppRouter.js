import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Finances from '../pages/Finances';
import Finance from '../pages/Finance';
import Credit from '../pages/Credit';

const AppRouter = () => {
    return (        
        <Switch>
                <Route path="/finances" component={Finances} exact/>
                <Route path="/finance/:id" component={Finance} exact/>
                <Route path="/credit" component={Credit} exact/>
        </Switch>
    )
}

export default AppRouter;
