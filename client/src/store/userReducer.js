const defaultStore = {
    username: "",
    token:""
}

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const REGISTER = "REGISTER";
const GET_USER ="GET_USER";

export const userReducer = (state = defaultStore, action)=>{
    switch (action.type){
        case LOG_IN:
            return {...state, username: action.payload.email, token:action.payload.token};
        case REGISTER:
            return {...state, username: action.payload.email, token:action.payload.token};
        case LOG_OUT:
            return {...state, username: "", token: ""};
        case GET_USER:
            return {...state};
        default:
            return state;
    }

}

export const logInAction = (payload)=>({type:LOG_IN, payload});
export const RegisterAction = ()=>({type:REGISTER});