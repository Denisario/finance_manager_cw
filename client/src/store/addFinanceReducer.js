const defaultStore = {
    financeItems: [],
    financeList: [1],
    financeHeader:"",
    categoryId: 0,
    financeItem: {},
    file: ""
}

const ADD_ROW = "ADD_ROW";
const DELETE_ROW = "DELETE_ROW";
const ADD_FILE = "ADD_FILE";
const ADD_FINANCE_ITEM = "ADD_FINANCE_ITEM";
const ADD_FINANCE_HEADER = "ADD_FINANCE_HEADER";
const GET_FINANCE_HEADER = "GET_FINANCE_HEADER";
const ADD_CATEGORY_ID = "ADD_CATEGORY_ID";

export const addFinanceReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case ADD_ROW:
            return {...state, financeItems: [...state.financeItems, action.payload], financeList: [...state.financeList, state.financeList.length+1]};
        case DELETE_ROW:
            return  {...state, financeItems:
                        [...state.financeItems.slice(0, action.payload),
                        ...state.financeItems.slice(action.payload+1)],
                    financeList: [...state.financeList.slice(0, action.payload),
                        ...state.financeList.slice(action.payload+1)]};
        case ADD_FILE:
            return {...state, file: action.payload};
        case ADD_FINANCE_ITEM:
            return {...state, financeItem: {...state.financeItem, [action.payload.name]: action.payload.value}}
        case ADD_FINANCE_HEADER:
            return {...state, financeHeader: action.payload};
        case ADD_CATEGORY_ID:
            return {...state, categoryId: +action.payload};
        case GET_FINANCE_HEADER:
            return state.financeHeader;
        default:
            return state;
    }
}