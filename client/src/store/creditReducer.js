const defaultStore = {
    result:[{}]
}

const ADD_CREDIT = "ADD_CREDIT";
const CLEAR_CREDIT = "CLEAR_CREDIT";

export const creditReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case ADD_CREDIT:
            return {...state, result: [...state.result, ...action.payload]}
        case CLEAR_CREDIT:
            return {...state, result: []};
        default:
            return state;
    }
}

export const addCreditAction = (payload)=>({type: ADD_CREDIT, payload});