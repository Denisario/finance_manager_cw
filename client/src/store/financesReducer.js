const defaultStore = {
    finances:[],
    finance: {},
}

const GET_FINANCES = "GET_FINANCES";
const ADD_FINANCES = "ADD_FINANCES";
const REMOVE_FINANCE = "REMOVE_FINANCE";
const CLEAR_FINANCE = "CLEAR_FINANCE";
const GET_FINANCE_BY_ID = "GET_FINANCE_BY_ID";

export const financesReducer = (state=defaultStore, action) =>{
    switch (action.type){
        case GET_FINANCES:
            return state.finances;
        case ADD_FINANCES:
            return {...state, finances: [...state.finances, ...action.payload]};
        case REMOVE_FINANCE:
            return {...state, finances: state.finances.filter(finance => finance.id !== action.payload)};
        case CLEAR_FINANCE:
            return  {...state, finances: []};
        case GET_FINANCE_BY_ID:
            return {...state, finance: action.payload}
        default:
            return state;
    }
}

export const addFinancesAction = (payload) =>({type: ADD_FINANCES, payload});
export const addFinanceAction = (payload)=>({type:GET_FINANCE_BY_ID, payload});

