const defaultStore = {
    incomeItems:[],
    incomeList:[1]
}

const ADD_INCOME = "ADD_INCOME";
const DELETE_INCOME = "DELETE_INCOME";

export const incomeReducer = (state = defaultStore, action)=>{
    switch (action.type) {
        case ADD_INCOME:
            return {...state, incomeItems: [...state.incomeItems, action.payload], incomeList: [...state.incomeList, state.incomeList.length + 1]};
        case DELETE_INCOME:
            return {...state, incomeItems: state.incomeItems.filter(income=>income.id!==action.payload), incomeList: state.incomeItems.slice(1)}
        default:
            return state;
    }
}