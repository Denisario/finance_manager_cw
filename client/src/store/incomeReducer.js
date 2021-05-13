const defaultStore = {
    incomeItems:[],
    incomeList:[1],
    fetchItems:[]
}

const ADD_INCOME = "ADD_INCOME";
const ADD_INCOMES = "ADD_INCOMES";
const DELETE_INCOME = "DELETE_INCOME";
const CLEAR_INCOME = "CLEAR_INCOME";

export const incomeReducer = (state = defaultStore, action)=>{
    switch (action.type) {
        case ADD_INCOME:
            return {...state, incomeItems: [...state.incomeItems, action.payload], incomeList: [...state.incomeList, state.incomeList.length + 1]};
        case ADD_INCOMES:
            return {...state, fetchItems: [...state.incomeItems, ...action.payload]};
        case DELETE_INCOME:
            return {...state, incomeItems: state.incomeItems.filter(income=>income.id!==action.payload), incomeList: state.incomeItems.slice(1)}
        case CLEAR_INCOME:
            return {...state, incomeItems: []}
        default:
            return state;
    }
}

export const addIncomes = (payload)=>({type: ADD_INCOMES, payload});