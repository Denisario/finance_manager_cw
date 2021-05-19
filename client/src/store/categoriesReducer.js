
const defaultStore = {
    categories:[],
    addCategoryName: ''
}
const GET_CATEGORIES = "GET_CATEGORIES";
const ADD_CATEGORY = "ADD_CATEGORY";
const ADD_CATEGORIES = "ADD_CATEGORIES";
const CLEAR_CATEGORIES = "CLEAR_CATEGORIES";

export const categoryReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case ADD_CATEGORIES:
            return {...state,  categories: [...state.categories, ...action.payload  ]};
        case GET_CATEGORIES:
            return {...state, categories: []};
        case ADD_CATEGORY:
            return {...state, addCategoryName: action.payload};
        case CLEAR_CATEGORIES:
            return {...state, categories: []}
        default:
            return state
    }
}

export const addCategoriesAction = (payload)=>({type: ADD_CATEGORIES, payload})

