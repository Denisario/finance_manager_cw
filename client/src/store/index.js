import {createStore,combineReducers, applyMiddleware} from 'redux'
import {financesReducer} from "./financesReducer"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import {modalsReducer} from "./modalsReducer";
import {addFinanceReducer} from "./addFinanceReducer";
import {userReducer} from "./userReducer";
import {categoryReducer} from "./categoriesReducer";
import {incomeReducer} from "./incomeReducer";
import {paginatorReducer} from "./paginatorReducer";
import {dateReducer} from "./dateReducer";
import {statReducer} from "./statReducer";
const rootReducer = combineReducers({
    finances: financesReducer,
    modals: modalsReducer,
    addFinance: addFinanceReducer,
    user: userReducer,
    categories: categoryReducer,
    income: incomeReducer,
    paginator: paginatorReducer,
    date: dateReducer,
    stat: statReducer
})
export const store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));