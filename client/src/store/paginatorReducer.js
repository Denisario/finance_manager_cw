const defaultStore = {
    page: 1,
    itemsPerPage: 10,
    totalItems: 0
}

const NEXT_PAGE = "NEXT_PAGE";
const PREV_PAGE = "PREV_PAGE";
const CHANGE_ITEMS_PER_PAGE = "CHANGE_ITEMS_PER_PAGE"

export const paginatorReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case NEXT_PAGE:
            return {...state, page: state.page+1};
        case PREV_PAGE:
            return {...state, page: state.page-1};
        case CHANGE_ITEMS_PER_PAGE:
            return {...state, itemsPerPage: +action.payload};
        default:
            return state;
    }

}