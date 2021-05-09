import {createStore,combineReducers, applyMiddleware} from 'redux'
import {financesReducer} from "./financesReducer"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import {modalsReducer} from "./modalsReducer";
import {addFinanceReducer} from "./addFinanceReducer";
const rootReducer = combineReducers({
    finances: financesReducer,
    modals: modalsReducer,
    addFinance: addFinanceReducer
})
export const store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));