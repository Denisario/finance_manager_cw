const defaultStore = {
    addFinanceModal: false,
    addCategoryModal: false,
    editFinanceModal: false
}

const SHOW_FINANCE_MODAL = "SHOW_FINANCE_MODAL";
const SHOW_CATEGORY_MODAL = "SHOW_CATEGORY_MODAL";
const SHOW_EDIT_FINANCE_MODAL = "SHOW_EDIT_FINANCE_MODAL";


export const modalsReducer = (state=defaultStore, action) =>{
    switch (action.type){
        case SHOW_FINANCE_MODAL:
            return {...state, addFinanceModal: !state.addFinanceModal};
        case SHOW_CATEGORY_MODAL:
            return {...state, addCategoryModal: !state.addCategoryModal};
        case SHOW_EDIT_FINANCE_MODAL:
            return {...state, editFinanceModal: !state.editFinanceModal}
        default:
            return state;
    }
}

