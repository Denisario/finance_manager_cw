
const defaultStore = {
    data:[{}],
    incomeData: [{}]
}

const ADD_STAT = "ADD_STAT";
const ADD_INCOME_STAT = "ADD_INCOME_STAT";

export const statReducer = (state = defaultStore, action)=>{
    switch (action.type) {
        case ADD_STAT:
            return {...state, data: action.payload};
        case ADD_INCOME_STAT:
            return {...state, incomeData: action.payload};
        default:
            return state;
    }
}

export const addStatAction = (payload)=>({type: ADD_STAT, payload});
export const addIncomeStatAction = (payload)=>({type: ADD_INCOME_STAT, payload});