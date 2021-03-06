import axios from "axios";
import {logInAction} from "../userReducer";


export const logIn = (data, history)=>{
    return (dispatch) =>{
        axios.post("http://localhost:5000/api/login",{...data}).then(data=>{
            dispatch(logInAction(data.data));
            localStorage.setItem("username", data.data.email);
            localStorage.setItem("id", data.data.id);
            localStorage.setItem("token", data.data.token);
        }).then(data=>history.push("/profile"));
    }
}

export const register = (data)=> {
    return (dispatch) => {
        axios.post("http://localhost:5000/api/register", {...data});
    }
}