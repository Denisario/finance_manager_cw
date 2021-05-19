import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Finances from '../pages/Finances';
import Finance from '../pages/Finance';
import Credit from '../pages/Credit';
import Debt from "../pages/Debt";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import IncomeItems from "../pages/IncomeItems";
import Stat from "../pages/Stat";
import IncomeStat from "../pages/IncomeStat";

const AppRouter = () => {
    return (        
        <Switch>
                <Route path="/finances" component={Finances} exact/>
                <Route path="/finance/:id" component={Finance} exact/>
                <Route path="/credit" component={Credit} exact/>
                <Route path="/debt" component={Debt} exact/>
                <Route path="/" component={Login} exact/>
                <Route path="/register" component={Register} exact/>
                <Route path="/profile" component={Profile} exact/>
                <Route path="/income/:id" component={IncomeItems} exact/>
                <Route path="/stat" component={Stat} exact/>
                <Route path="/incomeStat" component={IncomeStat} exact/>
        </Switch>
    )
}

export default AppRouter;
