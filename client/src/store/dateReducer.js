
const defaultStore = {
    startDate: "",
    finishDate: ""
}

const CHANGE_START_DATE = "CHANGE_START_DATE";
const CHANGE_FINISH_DATE = "CHANGE_FINISH_DATE";

export const dateReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case CHANGE_START_DATE:
            return {...state, startDate: action.payload};
        case CHANGE_FINISH_DATE:
            return {...state, finishDate: action.payload};
        default:
            return state;
    }
}
