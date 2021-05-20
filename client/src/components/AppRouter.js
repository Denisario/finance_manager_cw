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
    window.addEventListener("storage", function () {
        console.log("dad");
    }, false);
    return (        
        <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/register" component={Register} exact/>
            {(localStorage.getItem("id")!==null)&&<Route path="/finances" component={Finances} exact/>}
            {(localStorage.getItem("id")!==null)&&<Route path="/finance/:id" component={Finance} exact/>}
            {(localStorage.getItem("id")!==null)&&<Route path="/credit" component={Credit} exact/>}
            {(localStorage.getItem("id")!==null)&&<Route path="/debt" component={Debt} exact/>}
            <Route path="/profile" component={Profile} exact/>
            {(localStorage.getItem("id")!==null)&&<Route path="/income/:id" component={IncomeItems} exact/>}
            {(localStorage.getItem("id")!==null)&&<Route path="/stat" component={Stat} exact/>}
            {(localStorage.getItem("id")!==null)&&<Route path="/incomeStat" component={IncomeStat} exact/>}
        </Switch>
    )
}

export default AppRouter;
