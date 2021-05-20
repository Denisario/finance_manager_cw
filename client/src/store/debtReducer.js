const defaultStore = {
    months: 0,
    sum:0,
    procent: 0,
    result:[{}]
}

const ADD_DEBT = "ADD_DEBT";
const CLEAR_DEBT = "CLEAR_DEBT";

export const debtReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case ADD_DEBT:
            return {...state, result: [...state.result, ...action.payload]}
        case CLEAR_DEBT:
            return {...state, result: []};
        default:
            return state;
    }
}

export const addDebtAction = (payload)=>({type: ADD_DEBT, payload});