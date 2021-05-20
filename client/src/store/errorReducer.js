const defaultStore ={
    error: "",
    showError: false
}

const GET_ERROR = "GET_ERROR";
const SET_ERROR_FALSE = "SET_ERROR_FALSE";
export const errorReducer = (state = defaultStore,action)=>{
    switch (action.type) {
        case GET_ERROR:
            return {...state, error: action.payload, showError: true};
        case SET_ERROR_FALSE:
            return {...state, showError: false};
        default:
            return state;
    }
}