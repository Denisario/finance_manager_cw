const defaultStore = {
    financeItems: [],
    financeList: [1]
}

const ADD_ROW = "ADD_ROW";
const DELETE_ROW = "DELETE_ROW";


export const addFinanceReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case ADD_ROW:
            return {...state, financeItems: [...state.financeItems, action.payload], financeList: [...state.financeList, state.financeList.length+1]};
        case DELETE_ROW:
            console.log(action.payload);
            return  {...state, financeItems:
                        [...state.financeItems.slice(0, action.payload),
                        ...state.financeItems.slice(action.payload+1)],
                    financeList: [...state.financeList.slice(0, action.payload),
                        ...state.financeList.slice(action.payload+1)]};
        default:
            return state;
    }
}