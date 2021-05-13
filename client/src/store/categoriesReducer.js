
const defaultStore = {
    categories:[]
}
const GET_CATEGORIES = "GET_CATEGORIES";
const ADD_CATEGORIES = "ADD_CATEGORIES";

export const categoryReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case ADD_CATEGORIES:
            return {...state,  categories: [...state.categories, ...action.payload  ]};
        case GET_CATEGORIES:
            return {...state, categories: []}
        default:
            return state
    }
}

export const addCategoriesAction = (payload)=>({type: ADD_CATEGORIES, payload})