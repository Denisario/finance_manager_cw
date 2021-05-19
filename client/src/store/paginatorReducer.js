const defaultStore = {
    page: 0,
    itemsPerPage: 5,
    totalItems: 5
}

const NEXT_PAGE = "NEXT_PAGE";
const PREV_PAGE = "PREV_PAGE";
const CHANGE_ITEMS_PER_PAGE = "CHANGE_ITEMS_PER_PAGE";
const SET_FIRST_PAGE = "SET_FIRST_PAGE";

export const paginatorReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case NEXT_PAGE:
            return {...state, page: state.page+1};
        case PREV_PAGE:
            return {...state, page: state.page-1};
        case CHANGE_ITEMS_PER_PAGE:
            return {...state, itemsPerPage: +action.payload};
        case SET_FIRST_PAGE:
            return {...state, page: 0}
        default:
            return state;
    }

}